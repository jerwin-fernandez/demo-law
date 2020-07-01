let content1 = document.getElementById('content-1'),
    content2 = document.getElementById('content-2'),
    content3 = document.getElementById('content-3');

let btn1 = document.getElementById('btn1'),
    btn2 = document.getElementById('btn2'),
    btn3 = document.getElementById('btn3');


function open1() {
  btn1.style.color = "brown";
  btn2.style.color = "black";
  btn3.style.color = "black";


  // content1.style.transform = "translateX(0)";
  // content2.style.transform = "translateX(100%)";
  // content3.style.transform = "translateX(100%)";

  content1.style.opacity = "1";
  content2.style.opacity = "0";
  content3.style.opacity = "0";
}

function open2() {
  btn1.style.color = "black";
  btn2.style.color = "brown";
  btn3.style.color = "black";

  // content1.style.transform = "translateX(100%)";
  // content2.style.transform = "translateX(0)";
  // content3.style.transform = "translateX(100%)";

  content1.style.opacity = "0";
  content2.style.opacity = "1";
  content3.style.opacity = "0";
}

function open3() {

  btn1.style.color = "black";
  btn2.style.color = "black";
  btn3.style.color = "brown";

  // content1.style.transform = "translateX(1000%)";
  // content2.style.transform = "translateX(100%)";
  // content3.style.transform = "translateX(0)";

  content1.style.opacity = "0";
  content2.style.opacity = "0";
  content3.style.opacity = "1";
}

