function parseWC5Data (buf, options) {

  const data = {}; 
  
  document.getElementById("wondercardbox").style.display = "block";
  document.getElementById("anotherbox").style.display = "block";
  document.getElementById("outputbox").style.display = "block";
  
  if (buf.readUInt8(0xB3) == 1) { // if Pokemon
    data.idNo = idNo();
      document.getElementById("idNo").innerHTML = data.idNo;
      function idNo() {
        if (buf.readUInt32LE(0x00) == 0) {
          return "Yours";
        }
        else 
          return pad(buf.readUInt16LE(0x00),5);
      }
    data.sid = buf.readUInt16LE(0x02);
    data.originGameId = buf.readUInt8(0x04); // ??? "hometown" 
    data.pid = pidSet();
      function pidSet() {
        if (buf.readUInt32LE(0x08) !== 0) {
          return ( ((buf.readUInt32LE(0x08)).toString(16)));
        }
        else
          return "Unset";
      }
    data.Ribbon = ribbonInfo();
      function ribbonInfo() {
        if ((buf.readUInt8(0x0C) == 0) && (buf.readUInt8(0x0D) == 0)) {
          return "None";
        }
        else if (!buf.readUInt8(0x0C) == 0) {
          return ribbonName5A[buf.readUInt8(0x0C)];
        }
        else
          return ribbonName5B[buf.readUInt8(0x0D)];
      }
      document.getElementById("Ribbon").innerHTML = data.Ribbon;
      document.getElementById("pkmnRibbon").className = "ribbon5-" + ribbonAB() + ribbonType();
        function ribbonAB() {
          if (!buf.readUInt8(0x0C) == 0) {
            return "a"
          }
          else
            return "b"
        }
        function ribbonType() {
          if (ribbonAB() == "a") {
            return buf.readUInt8(0x0C);
          }
          else
            return buf.readUInt8(0x0D)
        }
        if ((buf.readUInt8(0x0C) == 0) && (buf.readUInt8(0x0D) == 0)) {
          document.getElementById("pkmnRibbon").className = "";
        }
      
    data.ball = ballName[buf.readUInt8(0x0E)];  
      document.getElementById("ball").innerHTML = data.ball;
      document.getElementById("pkmnBall").className = "spr-ball-" + buf.readUInt8(0x0E);
    data.heldItem = itemName[buf.readUInt16LE(0x10)];
      document.getElementById("heldItem").innerHTML = data.heldItem;
      document.getElementById("pkmnItem").className = itemCheck();
	  function itemCheck() {
	    if (buf.readUInt16LE(0x78) == 0) {
          return "";
        }
        else
          return "spr-item-" + buf.readUInt16LE(0x78);
      }
    data.move1Name = moveName[buf.readUInt16LE(0x12)];
      document.getElementById("move1Name").innerHTML = data.move1Name; 
    data.move2Name = moveName[buf.readUInt16LE(0x14)];  
      document.getElementById("move2Name").innerHTML = data.move2Name;
    data.move3Name = moveName[buf.readUInt16LE(0x16)];
      document.getElementById("move3Name").innerHTML = data.move3Name;
    data.move4Name = moveName[buf.readUInt16LE(0x18)];  
      document.getElementById("move4Name").innerHTML = data.move4Name;
    data.dexNo = buf.readUInt16LE(0x1A);
    data.pokemonName = pokemonName[buf.readUInt16LE(0x1A)];
      document.getElementById("pokemonName").innerHTML = data.pokemonName;
      document.getElementById("formName").innerHTML = "None";
    data.language = ['Yours', 'JPN', 'ENG', 'FRE', 'ITA', 'GER', '???', 'SPA', 'KOR', 'CHS', 'CHT'][buf.readUInt8(0x1D)]; 
      document.getElementById("language").innerHTML = data.language;
    data.nickname = nicknameName();
      document.getElementById("nickname").innerHTML = data.nickname;
      function nicknameName() {
        if (buf.readUInt16LE(0x1E) !== 0xFFFF) {
          return stripNullChars(buf.toString('utf16le', 0x1E, 0x31));
        }
        else 
          return "None";
      }
    data.nature = natureType();
      document.getElementById("nature").innerHTML = data.nature;
      function natureType() {
        if (buf.readUInt8(0x34) == 0xFF) {
          return "Random";
        }
        else
          return "";
      }
    data.natureLock = natureLock();
      document.getElementById("natureLock").innerHTML = data.natureLock;
      function natureLock() {
        if (buf.readUInt8(0x34) < 0xFF) {
          return natureName[buf.readUInt8(0x34)];
        }
        else
          return "";
      }
    data.gender = ['♂', '♀', 'Random/Genderless'][buf.readUInt8(0x35)]; 
      document.getElementById("gender").innerHTML = data.gender;
      function genderColor() {
        if (data.gender == "♂") {
          return "blue";
        }
        if (data.gender == "♀") {
          return "red";
        }
        else
          return "#000";
      }    
      document.getElementById("gender").style.color = genderColor();
    data.abilityType = ['Fixed ability 1', 'Fixed ability 2', 'Fixed HA', 'Random (no HA)', 'Random (including HA)'][buf.readUInt8(0x36)]; 
      document.getElementById("abilityType").innerHTML = data.abilityType; 
    data.shiny = ['Never', 'Can be shiny', 'Yes'][buf.readUInt8(0x37)]; 
      document.getElementById("canBeShiny").innerHTML = data.shiny;
      if (data.canBeShiny === 'Can be shiny') {
        document.getElementById("canBeShiny").style.color = "#D0AF00";
        document.getElementById("canBeShiny").style.fontWeight = "bold";
      }
      else {
        document.getElementById("canBeShiny").style.color = "#000";
        document.getElementById("canBeShiny").style.fontWeight = "normal";
      }
    data.eggLocation = locationName5[buf.readUInt16LE(0x38)];
      document.getElementById("eggLocation").innerHTML = data.eggLocation;
    data.metLocation = locationName5[buf.readUInt16LE(0x3A)]; 
      document.getElementById("metLocation").innerHTML = data.metLocation;
    data.metLevel = buf.readUInt8(0x3C);
    data.contestStatCool = buf.readUInt8(0x3D);
    data.contestStatBeauty = buf.readUInt8(0x3E);
    data.contestStatCute = buf.readUInt8(0x3F);
    data.contestStatSmart = buf.readUInt8(0x40);
    data.contestStatTough = buf.readUInt8(0x41);
    data.contestStatSheen = buf.readUInt8(0x42);
    data.ivType = ivType();  
      function ivType() {
        if (buf.readUInt32LE(0x43) == "0xFFFFFFFF") {
          return "Random";
          }
        else
          return "Has fixed IVs";
      }  
      data.ivHp = ivHp();
        function ivHp() {
          if (buf.readUInt8(0x43) > "0xFE") {
            return "Unset";
            }
          else
            return (buf.readUInt8(0x43));
        }    
      data.ivAtk = ivAtk();
        function ivAtk() {
          if (buf.readUInt8(0x44) == "0xFF") {
            return "Unset";
            }
          else
            return (buf.readUInt8(0x44));
        }  
      data.ivDef = ivDef();
        function ivDef() {
          if (buf.readUInt8(0x45) == "0xFF") {
            return "Unset";
            }
          else
            return (buf.readUInt8(0x45));
        }
      data.ivSpe = ivSpe();
        function ivSpe() {
          if (buf.readUInt8(0x46) == "0xFF") {
            return "Unset";
            }
          else
            return (buf.readUInt8(0x46));
        }
      data.ivSpAtk = ivSpAtk();
        function ivSpAtk() {
          if (buf.readUInt8(0x47) == "0xFF") {
            return "Unset";
            }
          else
            return (buf.readUInt8(0x47));
        }
      data.ivSpDef = ivSpDef();
        function ivSpDef() {
          if (buf.readUInt8(0x48) == "0xFF") {
            return "Unset";
            }
          else
            return (buf.readUInt8(0x48));
        }
      document.getElementById("ivInfo").innerHTML = ivInfo();
        function ivInfo() {
        if (data.ivType == "Has fixed IVs") {
          return (ivHpReadable() + "/" + ivAtkReadable()  + "/" + ivDefReadable()  + "/" + ivSpAtkReadable() + "/" + ivSpDefReadable() + "/" + ivSpeReadable())
        }
        else 
          return ivType()
        }
        
        function ivHpReadable() {
          if (data.ivHp == "Unset"){
            return "x";
          }
          else
            return data.ivHp
        }
        function ivAtkReadable() {
          if (data.ivAtk == "Unset"){
            return "x";
          }
            else
              return data.ivAtk
        }
        function ivDefReadable() {
          if (data.ivDef == "Unset"){
            return "x";
          }
            else
              return data.ivDef
        }
        function ivSpAtkReadable() {
          if (data.ivSpAtk == "Unset"){
            return "x";
          }
            else
              return data.ivSpAtk
        }
        function ivSpDefReadable() {
          if (data.ivSpDef == "Unset"){
            return "x";
          }
            else
              return data.ivSpDef
        }
        function ivSpeReadable() {
          if (data.ivSpe == "Unset"){
            return "x";
          }
            else
              return data.ivSpe
        }
    data.ot = otName();
      function otName() {
        if (buf.readUInt16LE(0x4A) == 0xFFFF) {
          return "Yours";
        }
        else return stripNullChars(buf.toString('utf16le', 0x4A, 0x59));
      }
      document.getElementById("ot").innerHTML = data.ot;
    data.otGender = ['♂', '♀', '???', 'Yours'][buf.readUInt8(0x5A)];
      function otgColor() {
        if (data.otGender == "♂") {
          return "blue";
        }
        if (data.otGender == "♀") {
          return "red";
        }
        else
          return "#000";
      }   
    data.Level = level();
      function level() {
        if (buf.readUInt8(0x5B) == 0) {
          return "Random";
        }
        else
          return buf.readUInt8(0x5B);
      }
      function metLevelCheck() {
        if ((data.Level !== data.metLevel) && (data.metLevel !== 0)) {
          return " (met at level " + data.metLevel + ")";
        }
        else return ""
      }
      document.getElementById("Level").innerHTML = data.Level + metLevelCheck();
    data.isEgg = ['Not egg', 'Is egg'][buf.readUInt8(0x5C)]; 

    document.getElementById("pkmnSpecies").className = "spr-box" + " spr-box-" + data.dexNo + " " + shinyCheckAgain();
      function shinyCheckAgain() {
        if (data.pidId == 2) {
          return "spr-shiny";
        }
        else 
          return "spr-regular";
      } 

    document.getElementById("pokemonbox").style.display = "block";
    document.getElementById("itembox").style.display = "none";
    document.getElementById("filename").style.display = "none";
    document.getElementById("filecheckbox").style.display = "none";
    document.getElementById('filetoggle').checked = false;

  }

  if (buf.readUInt8(0xB3) == 2) { // if Item
  
    data.item1 = itemName[(buf.readUInt16LE(0x00))];
      document.getElementById("item1").innerHTML = data.item1;
      
    document.getElementById("pokemonbox").style.display = "none";
    document.getElementById("itembox").style.display = "block";
    
  }
  
  if (buf.readUInt8(0xB3) == 3) { // if Power
    data.powerType = buf.readUInt16LE(0x00);
  } 
  
  data.wcTitle = stripNullChars(buf.toString('utf16le', 0x60, 0xA9));
    document.getElementById("wcTitle").innerHTML = data.wcTitle;
  data.day = buf.readUInt8(0xAC);
  data.month = buf.readUInt8(0xAD);
  data.year = buf.readUInt16LE(0xAE);
  data.wcId = buf.readUInt16LE(0xB0);
  data.cardText = cardText5[buf.readUInt8(0xB2)]; 
    document.getElementById("cardText").innerHTML = data.cardText;
  data.cardType = [null, 'Pokemon', 'Item', 'Power'][buf.readUInt8(0xB3)];  
  data.cardColor = [null, 'Blue', 'Pink', 'Yellow'][buf.readUInt8(0xB3)];  
    document.querySelector("header").style.background = wcBackground();
      function wcBackground() {
        if (data.cardColor == "Blue") {
          return "#00A9A9"; 
        }
        else if (data.cardColor == "Pink") {
          return "#F87888"; 
        }
        else if (data.cardColor == "Yellow") {
          return "#f6fa29"; 
        }
        else
          return "#222"; 
      }
  data.giftRedeemable = ['Infinite', 'Only once', 'Infinite', 'Only once'][buf.readUInt8(0xB4)];
    document.getElementById("giftRedeemable").innerHTML = data.giftRedeemable;
    if (data.giftRedeemable === 'Infinite') {
      document.getElementById("giftRedeemable").style.color = "#009688";
      document.getElementById("giftRedeemable").style.fontWeight = "bold";
    }
    else {
      document.getElementById("giftRedeemable").style.color = "#000";
      document.getElementById("giftRedeemable").style.fontWeight = "normal";
    }
  data.giftStatus = ['Unused', 'Unused', 'Used', 'Used'][buf.readUInt8(0xB4)]; 
  
  document.getElementById("pkmnImg").src = "img/large/pokemon" + shinyCheck() + pokemonImg() + ".png";
    function pokemonImg() {
      if (data.isEgg == 'Is egg') {
        return "egg";
      }
      else if (data.cardType == 'Item') {
        return "0";
      }
      else 
        return data.dexNo;
    }
    function shinyCheck() {
      if (data.shiny == "Yes") {
        return "/shiny/";
      }
      else 
        return "/regular/";
    }   
  
  return data;
}