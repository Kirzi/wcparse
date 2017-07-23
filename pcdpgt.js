function parsePCDPGTData (buf, options) {

  const data = {}; 
  
  document.getElementById("anotherbox").style.display = "block";
  document.getElementById("outputbox").style.display = "block";

  data.wcType = document.getElementById('input').value.slice(-3);
  data.cardType = [null, 'Pokemon', 'Egg', 'Item', 'Rule', 'Seal', 'Accessory', 'Manaphy Egg', 'Member Card', 'Oak\'s Letter', 'Azure Flute', 'Poketch', 'Secret Key', '13', 'Pokewalker', '15'][buf.readUInt16LE(0x00)];  
  
  if (data.wcType == "pgt") { // the only difference between PCDs and PGTs (aside from the extra bytes at the end)
    data.cardSlot = buf.readUInt8(0x02);
  }
  
  if (data.wcType == "pcd") {
  
    data.dateReceived = calcDate();
      function calcDate() {
        var days = buf.readUInt32LE(0x354);
        var fullDate = moment().year(2000).month(1).date(1).add(days, 'days').format('YYYY-MM-YY');
        return fullDate;
      }
  }
  
  // temporary
  document.querySelector("header").style.backgroundColor = "#222";
  document.getElementById("wondercardbox").style.display = "none";

  return data;

}; 