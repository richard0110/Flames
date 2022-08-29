let firstName = prompt("First Name");
let secondName = prompt("Second Name");
let flames = {
  f: "Friends",
  l: "Lovers",
  a: "Affection",
  m: "Married",
  e: "Emeny",
  s: "Sister",
};
let text = ["f", "l", "a", "m", "e", "s"];

const phaseOne = function (name) {
  const holder = [...name];
  for (let i = 0; i < holder.length; i++) {
    if (holder[i] === " ") holder.splice(i, 1);
  }
  return holder;
};
const phaseTwo = function () {
  for (let i = 0; i < fN.length; i++) {
    for (let j = 0; j < sN.length; j++) {
      if (fN[i] == sN[j]) {
        fN.splice(i, 1);
        sN.splice(j, 1);
        break;
      }
    }
  }
  const Cname = [...fN, ...sN];
  return Cname.length;
};
const fN = phaseOne(firstName.toLowerCase());
const sN = phaseOne(secondName.toLowerCase());
reqNum = phaseTwo();

const phaseThree = function () {
  let sp = 0;

  console.log(text);
  for (let j = 0; j < 5; j++) {
    for (let i = 0; i < reqNum; i++) {
      //console.log(`${i + 1} in ${sp}`);
      if ((i + 1) % reqNum == 0) {
        text.splice(sp, 1);
        //console.log("break" + sp);
        if (sp != text.length) {
          sp--;
        }
      }
      sp >= text.length - 1 ? (sp = 0) : sp++;
    }
  }
  //console.log(text);
};

phaseThree();
console.log(reqNum);
console.log(text[0]);

document.querySelector(".flames").textContent = flames[text[0]];
