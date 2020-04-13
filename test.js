reverseInt = (int) => {
  let str = int.toString();
  let rev = str.split("").reverse().join("");
  let parse = parseInt(rev);
  if (Math.sign(int) === -1) {
    parse = parse * -1;
  }
  console.log(str);
  console.log(typeof parse);
};

reverseInt(-15);
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9
