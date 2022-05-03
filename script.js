var rows = document.getElementsByClassName("custom-row");
var currentHour = parseInt(moment().format('H'));

Array.from(rows).forEach(row => {
  var boxId = row.id;
  var boxHour;
  
  if (boxId) {
    boxHour = parseInt(boxId);
  }
  if (boxHour) {
    // Compares row id to current hour and sets color accordingly
    if (currentHour === boxHour) {
      setColor(row, "red");
    } else if ((currentHour < boxHour)) {
      setColor(row, "#8A9A5B");
    } else if ((currentHour > boxHour)) {
      setColor(row, "lightgrey");
    } else {
      setColor(row, "white");
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}


$('#currentDay').text(moment().format("dddd, MMMM D"))

