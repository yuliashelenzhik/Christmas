const letters = document.querySelector(".letters");
const santa = document.querySelector(".santa");
const snowmen = document.querySelector(".snowmen");
const elf = document.querySelector(".elf");
const tree = document.querySelector(".tree");
const presents = document.querySelector(".presents");
const snowflake = document.querySelector(".snowflake");
const snowballs = document.querySelector(".snowballs");
const snowshapes = document.querySelector(".snowshapes");
const snow = document.querySelector(".snowlayer");

letters.addEventListener("click", () => {
  const lettersSound = new Audio();
  lettersSound.src = "./sound/christmas.mp3";
  lettersSound.play();
  gsap.to(".letters", {
    scaleX: 1.5,
    scaleY: 1.5,
    duration: 1,
    delay: 0.5,
    ease: "sine.inOut",
  });
  gsap.to(".letters", {
    scaleX: 1,
    scaleY: 1,
    duration: 1,
    delay: 1.5,
    ease: "sine.inOut",
  });
});

santa.addEventListener("click", () => {
  const santaSound = new Audio();
  santaSound.src = "./sound/santa.mp3";
  santaSound.play();
  let tl = gsap.timeline();
  tl.from(".santa", {
    x: 0,
    duration: 2,
    ease: "sine.inOut",
  });
  tl.to(".santa", {
    x: -1200,
    duration: 2,
    ease: "sine.inOut",
  });
  tl.from(".santa", {
    x: 400,
    duration: 1,
    ease: "sine.inOut",
  });
});

snowmen.addEventListener("click", () => {
  const snowmenSound = new Audio();
  snowmenSound.src = "./sound/snowman.mp3";
  snowmenSound.play();
  let tl = gsap.timeline();
  tl.to(".snowmen", {
    scaleX: 1.1,
    scaleY: 1.1,
    y: "-10%",
    duration: 1,
    delay: 1,
    ease: "sine.inOut",
  });
  tl.to(".snowmen", {
    scaleX: 1,
    scaleY: 1,
    duration: 1,
    y: 0,
    ease: "sine.inOut",
  });
});

elf.addEventListener("click", () => {
  const elfSound = new Audio();
  elfSound.src = "./sound/elf.mp3";
  elfSound.play();
  let tl = gsap.timeline();
  tl.to(".elf", {
    rotation: -20,
    duration: 1,
    x: -20,
    delay: 1,
  });
  tl.to(".elf", {
    rotation: 0,
    duration: 1,
    x: 0,
  });
});

tree.addEventListener("click", () => {
  const treeSound = new Audio();
  treeSound.src = "./sound/tree.mp3";
  treeSound.play();
  let tl = gsap.timeline({ repeat: 5 });
  tl.to(".tree", {
    rotation: -1,
    duration: 0.2,
    transformOrigin: "bottom center",
  });
  tl.to(".tree", {
    rotation: 1,
    transformOrigin: "bottom center",
    duration: 0.2,
  });
});

presents.addEventListener("click", () => {
  const presentsSound = new Audio();
  presentsSound.src = "./sound/tree.mp3";
  presentsSound.play();
  let tl = gsap.timeline();
  tl.to(".elf", {});
});

snowflake.addEventListener("click", () => {
  const snowflakeSound = new Audio();
  snowflakeSound.src = "./sound/snowing.mp3";
  snowflakeSound.play();
  snowballs.classList.toggle("show");
  snowshapes.classList.toggle("show2");
});

snow.addEventListener("click", () => {
  const snowSound = new Audio();
  snowSound.src = "./sound/snow.mp3";
  snowSound.play();
});
