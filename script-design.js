let images_design = ['peggy_acid.png','portrait_acid.png','acid1.png','corrosion.jpg','butterfly.png','venus.jpg'];

let current_image = document.getElementById("main-image");

let index = 0;

current_image.src = images_design[0];

function designshow(direction){

    if (direction === "left")
    {
        index--;
    }
    else
    {
        index++;
        index %= images_design.length;
    }

    if (index < 0)
    {
        index = images_design.length - 1;
    }

    current_image.src = images_design[index];

}