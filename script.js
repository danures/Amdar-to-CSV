
//create CSV file data in a string
var csvFileData =
  "Command Set, Data Format (ASCII or Hex), Terminator String\n" +
  "Shades, ASCII,\n" +
  "---End of Integration Command Set---\n" +
  'Command Set,Command Name,"Command Direction (To 3rd Party = To, From 3rd Party = From, To & From 3rd Party = Both)",Command Data\n';

const inputValues = function () {
  let inputName = document.getElementById("inputNameText").value; //Getting user input from fields
  let inputID = document.getElementById("inputIDText").value;
  let list = document.getElementById("nameList");

  //Check ID is valid
  if (inputID < 1000 || inputID > 9999) {
    alert('Invalid ID');
    return "";
  }

  csvFileData += `Shades, ${inputName} UP, To, >${inputID}0u<\n`;
  csvFileData += `Shades, ${inputName} DOWN, To, >${inputID}0d<\n`;
  csvFileData += `Shades, ${inputName} STOP, To, >${inputID}0s<\n`;

  document.getElementById("inputNameText").value = ""; //Clearing input field
  document.getElementById("inputIDText").value = "";

  let entry1 = document.createElement('li');// Create a list of entrys
    entry1.appendChild(document.createTextNode(`${inputName}       ${inputID}`));
  list.appendChild(entry1);
};

//Event listener for Enter Press
let nameField = document.getElementById("inputNameText");
let IDField = document.getElementById("inputIDText");
let btn = document.getElementById("inputBtn");

nameField.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    IDField.focus();
  }
});

IDField.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    btn.focus();
  }
});

btn.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    nameField.focus();
  }
});

function download_csv_file() {
  csvFileData += `---End of Integration Command---`;
  //display on the web browser
  document.write("Done :)");

  var hiddenElement = document.createElement("a");
  hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(csvFileData);
  hiddenElement.target = "_blank";

  //provide the name for the CSV file to be downloaded
  hiddenElement.download = "Amdar Shades Commands.csv";
  hiddenElement.click();
}
