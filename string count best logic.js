dummy = "haLle all".split(" ");
duppi = dummy.join("");
ary = Array.from(duppi);

ob = {};

const func = (ary, ob) => {
  for (let ele in ary) {
    dummy = ary[ele];
    key = dummy.toLowerCase();
    if (/[a-z0-9]/.test(key)) {
      ob[key] ? (ob[key] += 1) : (ob[key] = 1);
    }
  }
};

func(ary, ob);
console.log(ob);
