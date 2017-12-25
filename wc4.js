function parseWC4Data (buf, options) {

  const data = {}; 
  
  document.getElementById("anotherbox").style.display = "block";
  document.getElementById("outputbox").style.display = "block";

  data.wcType = document.getElementById('input').value.slice(-3);
  
  data.cardType = [null, 'Pokemon', 'Egg', 'Item', 'Rule', 'Seal', 'Accessory', 'Manaphy Egg', 'Member Card', 'Oak\'s Letter', 'Azure Flute', 'Poketch', 'Secret Key', '13', 'Pokewalker', '15'][buf.readUInt16LE(0x00)];  
  
  if (buf.length == 260) { // pgt; the only difference between PCDs and PGTs (aside from the extra bytes at the end)
    data.cardSlot = buf.readUInt8(0x02);
  }
  
  data.cardTypeParameter = buf.readUInt32LE(0x04);
  data.ParameterName = ctParam();
    function ctParam() {
      if ((data.cardType === 'Pokemon') || (data.cardType === 'Egg')) {
        return ['Your OT', 'Preset OT'][buf.readUInt32LE(0x04)];
      }
      else if (data.cardType === 'Item') {
        return itemName[buf.readUInt32LE(0x04)];
      }
      // not going to bother adding Poketch or Pokewalker names here, look up the index yourself
    }
  data.pokemonInfo = buf.toString('utf16le', 0x08, 0xF3); // encrypted
  
  if (buf.length == 856) { // pcd
    data.cardTitle = stripNullChars(buf.toString('utf16le', 0x104, 0x149)); // encrypted
    data.gamesAvailable = gamesAvailable();
      function gamesAvailable() {
        const games4 = ["", "", "", "", "", "", "", "HG", "SS", "", "Diamond", "Pearl", "Platinum", "", "", ""];
        var gamesBinaryArray = pad(buf.readUInt16LE(0x14C).toString(2),16).split('').map(Number).reverse();
        var gamesRedeemable = "";
        for (i = 0; i < 16; i++) {
          if (gamesBinaryArray[i] == 1) {
            gamesRedeemable += games4[i] + "/";
          }
        }
        return gamesRedeemable.slice(0,-1);
      }
    data.wcID = buf.readUInt8(0x150);
    data.cardText = stripNullChars(buf.toString('utf16le', 0x154, 0x335)); // encrypted
    data.redistributionsLeft = redisLeft(); 
      function redisLeft() {
        if (buf.readUInt16LE(0x348) == 0x00) {
          return "Not redistributable";
        }
        else if (buf.readUInt16LE(0x348) == 0xFF) {
          return "Unlimited";
        }
        else
          return buf.readUInt16LE(0x348);
      }
    data.pokeIconLeft = pokemonName[buf.readUInt16LE(0x34A)];
    data.pokeIconMiddle = pokemonName[buf.readUInt16LE(0x34C)];
    data.pokeIconRight = pokemonName[buf.readUInt16LE(0x34E)];
    data.dateReceived = calcDate();
      function calcDate() {
        var days = buf.readUInt32LE(0x354);
        var fullDate = moment().year(2000).month(1).date(1).add(days, 'days').format('YYYY-MM-YY');
        return fullDate;
      }
  }
  
  // temporary while the important stuff is encrypted
  document.querySelector("header").style.backgroundColor = "#222";
  document.getElementById("wondercardbox").style.display = "none";
  document.getElementById("filename").style.display = "none";
  document.getElementById("filecheckbox").style.display = "none";
  document.getElementById('filetoggle').checked = false;

  return data;

}; 