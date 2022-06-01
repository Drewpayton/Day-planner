var nineText = document.getElementById("9");
var tenText = document.getElementById("10");
var elevenText = document.getElementById("11");
var twelveText = document.getElementById("12");
var thirteenText = document.getElementById("13");
var fourteenText = document.getElementById("14");
var fifteenText = document.getElementById("15");
var sixteenText = document.getElementById("16");
var seventeenText = document.getElementById("17");
var saveBtn = document.querySelector(".saveBtn");
var clearBtn = document.querySelector(".custom-clear");
var saveBtnAll = document.querySelectorAll(".saveBtn");

var rows = document.getElementsByClassName("custom-row");
var currentHour = parseInt(moment().format('H'));
console.log(currentHour);

saveData();

function saveData() {

var nine = localStorage.getItem("nineTime");
var ten = localStorage.getItem("tenTime");
var eleven = localStorage.getItem("elevenTime");
var twelve = localStorage.getItem("twelveTime");
var thirteen = localStorage.getItem("thirteenTime");
var fourteen = localStorage.getItem("fourteenTime");
var fifteen = localStorage.getItem("fifteenTime");
var sixteen = localStorage.getItem("sixteenTime");
var seventeen = localStorage.getItem("seventeenTime");

nineText.textContent = nine;
tenText.textContent = ten;
elevenText.textContent = eleven;
twelveText.textContent = twelve;
thirteenText.textContent = thirteen;
fourteenText.textContent = fourteen;
fifteenText.textContent = fifteen;
sixteenText.textContent = sixteen;
seventeenText.textContent = seventeen;
};

for (i = 0; i < saveBtnAll.length; i++) {
  saveBtnAll[i].addEventListener("click", function(){

    var nine = nineText.value;
    var ten = tenText.value;
    var eleven = elevenText.value;
    var twelve = twelveText.value;
    var thirteen = thirteenText.value;
    var fourteen = fourteenText.value;
    var fifteen = fifteenText.value;
    var sixteen = sixteenText.value;
    var seventeen = seventeenText.value;

localStorage.setItem("nineTime", nine);
localStorage.setItem("tenTime", ten);
localStorage.setItem("elevenTime", eleven);
localStorage.setItem("twelveTime", twelve);
localStorage.setItem("thirteenTime", thirteen);
localStorage.setItem("fourteenTime", fourteen);
localStorage.setItem("fifteenTime", fifteen);
localStorage.setItem("sixteenTime", sixteen);
localStorage.setItem("seventeenTime", seventeen);
})
}
11
function clearData() {
    localStorage.clear();

    nineText.textContent = "";
    tenText.textContent = "";
    elevenText.textContent = "";
    twelveText.textContent = "";
    thirteenText.textContent = "";
    fourteenText.textContent = "";
    fifteenText.textContent = "";
    sixteenText.textContent = "";
    seventeenText.textContent = "";
}

clearBtn.addEventListener("click", function() {
    clearData();
})

Array.from(rows).forEach(row => {
  var boxId = row.id;
  var boxHour;
  
  if (boxId) {
    boxHour = parseInt(boxId);
  }
  if (boxHour) {
    if (currentHour === boxHour) {
      setColor(row, "#F08080");
      setBorder(row, "groove");
    } else if ((currentHour < boxHour)) {
      setColor(row, "#8A9A5B");
      setBorder(row, "groove");
    } else if ((currentHour > boxHour)) {
      setColor(row, "lightgrey");
      setBorder(row, "groove");
    } else {
      setColor(row, "white");
      setBorder(row, "groove");
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}
function setBorder(element, border) {
  element.style.border = border;
}


$('#currentDay').text(moment().format("dddd, MMMM D"));

