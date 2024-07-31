console.log("hie inserted through terminal");
const express = require("express");
const app = express();
function sum(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += i;
  }
  return ans;
}
app.get("/natural", function (req, res) {
  const n = req.query.n;
  const ans = sum(n);

  res.send("sum is " + ans);
});
app.get("/", function (req, res) {
  const a = req.query.a;
  const b = req.query.b;
  const ans = +a + +b;

  res.send("sum is " + ans);
});

app.listen(3000);

// map , filter

const arr = [1, 2, 3, 4, 5];
const ans = arr.map((i) => {
  return i * 2;
});
console.log(ans);

const hiej = arr.filter((n) => {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
});
console.log(hiej);

console.log("Console from test");
