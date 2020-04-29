var unirest = require("unirest");

var req = unirest("GET", "https://the-cocktail-db.p.rapidapi.com/random.php");

req.headers({
  "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
  "x-rapidapi-key": "c053308e0cmsh40a5ba8d977bd68p1803d8jsn220088028d79"
});


req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});
