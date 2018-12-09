let images_photography = ["female1.png","female3.png", "peggy2.png","peggy.png","peggy3.png","peggy4.png","peggy5.png",
  "starchild.png","starchild2.png", "shadow.jpg","shadow2.jpg","shadow3.jpg"];

let current_image = document.getElementById("main-image");

let index = 0;

current_image.src = images_photography[0];

function photoshow(direction) {
  if (direction === "left") {
    index--;
  }
  else {
    index++;
    index %= images_photography.length;
  }

  if (index < 0) {
    index = images_photography.length - 1;
  }

  current_image.src = images_photography[index];
}
