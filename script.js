var rows = document.getElementsByClassName("custom-row");
var currentHour = parseInt(moment().format('H'));
console.log(currentHour)

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

if (nine === null) {
  console.log("this is null")
}else {
  console.log("this is active")
}

};



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


$('#currentDay').text(moment().format("dddd, MMMM D"))

