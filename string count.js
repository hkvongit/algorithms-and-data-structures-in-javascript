

dummy = "haLle all".split(" ");
duppi = dummy.join("");
ary = Array.from(duppi);

ob = {};
const func = (ary,ob) => {
  for (ele in ary) {
      key = ary[ele]
    if (ob[key] === undefined) {
      ob[key] = 1;
    } else {
      ob[key] += 1;
    }
  }
};

func(ary, ob);
console.log(ob);
