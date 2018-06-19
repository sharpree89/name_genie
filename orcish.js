var orcish =

["Rotwort",
"Mug",
"Naffgul",
"Dreggrim",
"Raturty",
"Nubskab",
"Skaruz",
"Skabgrod",
"Wazgul",
"Mekdreg",
"Naffsog",
"Durnob",
"Nobgul",
"Mugurty",
"Shakrot",
"Nobsnik",
"Gordreg",
"Dakaurty",
"Ratgrot",
"Nobog",
"Dakagor",
"Snagarunt",
"Ogarg",
"Gobgrot",
"Zodgrim",
"Dregork",
"Wortgob",
"Snikog",
"Skargor",
"Urty",
"Duffarg",
"Gobgul",
"Snagagor",
"Urtyskab",
"Badslag",
"Ugkop",
"Oggrot",
"Snagazod",
"Badarg",
"Narkop",
"Uzwort",
"Dreggrod",
"Nubgob",
"Mugork",
"Skumbag",
"Oggrim",
"Badgob",
"Snagagog",
"Narzod",
"Gobdreg",
"Zoggrot",
"Grimsog",
"Gorrot",
"Rotork",
"Waasog",
"Snikgrub",
"Durshak",
"Skabgul",
"Skabskab",
"Wortgob"]

function orcishGenerator() {
  var name = "";
  var arr = [];
  var index = 0;

  for(var i = 0; i < 3; i++) {
    index = Math.floor((Math.random() * 60) + 1);
    name = orcish[index];
    arr.push(name);
  }
  return arr;
}

console.log(orcishGenerator());

var count = 0;
for(var i = 0; i <= orcish.length; i++) {
  count++;
}
console.log("orcish count:", count);
