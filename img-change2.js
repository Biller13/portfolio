let x = 0;
let y = 0;
let z = 0;

function changeImg(image) {
    if (x === 0) {
        image.src = "images/other/[BACK]Business_card_sample_2.jpg";
        x = 1;
    } else {
        image.src = "images/other/[FRONT]Business_card_sample_2.jpg";
        x = 0;
    }
}

function changeImg2(image) {
    if (y === 0) {
        image.src = "images/other/[BACK]Business_card_sample_1.jpg";
        y = 1;
    } else {
        image.src = "images/other/[FRONT]Business_card_sample_1.jpg";
        y = 0;
    }
}

function changeImgLogos(image) {
    if (z === 0) {
        image.src = "images/logos/aspire-logo.png";
        document.getElementById("img-alt").textContent = "Aspire Logo";
        z++;
    } else if (z === 1) {
        image.src = "images/logos/triceratops-logo.png";
        document.getElementById("img-alt").textContent = "Triceratops Logo";
        z++;
    } else if (z === 2) {
        image.src = "images/logos/eagle-logo.png";
        document.getElementById("img-alt").textContent = "Eagle Logo";
        z++;
    } else if (z === 3) {
        image.src = "images/logos/egypt-logo.png";
        document.getElementById("img-alt").textContent = "Egypt Logo";
        z++;
    } else {
        image.src = "images/logos/viking-logo.png";
        document.getElementById("img-alt").textContent = "Viking Logo";
        z = 0;
    }
}