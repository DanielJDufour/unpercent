function unpercent(percentage, { whole = 1, round = false } = { whole: 1, round: false }) {
  if (["object", "undefined", "number"].includes(typeof percentage)) {
    throw new Error(`[unpercent] you must supply a percentage string. You supplied ${percentage}`);
  }
  percentage = Number(percentage.replace("%", "").replace(/ /g, ""));
  let res = whole * (percentage / 100);
  if (round) res = Math.round(res);
  return res;
}

if (typeof define === "function") define(() => unpercent);
if (typeof module === "object") module.exports = unpercent;
if (typeof window === "object") window.unpercent = unpercent;
if (typeof self === "object") self.unpercent = unpercent;
