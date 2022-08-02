const flags = document.querySelectorAll(".flag");
const flagBlock = document.querySelector(".flags");
let allInterval = 3000;

const appearanceOfFlags = () => {
  const interval = 400; 
  let increment = 1;
  flags.forEach((flag, index) => {
    const addId = setTimeout(() => {
      flag.classList.add(`flag${index}`);
      clearTimeout(addId);
    }, interval * increment);
    increment = increment + 1;
  });
};

setTimeout(appearanceOfFlags, allInterval);
allInterval += (400*flags.length);
console.log(allInterval)
const step = () => {
  flagBlock.style.animation = "rotateCircle 7s linear infinite";
};
setTimeout(step, allInterval);

