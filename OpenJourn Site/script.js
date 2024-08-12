const dropArea = document.getElementById("drag-drop-area");
const inputFile = document.getElementById("input-file");
const imgView = document.getElementById("img-view");
const imgContaienr = document.getElementById("img-container");

const queryInput = document.querySelector("textarea");

const fileName = document.getElementById("file-name");

const generateBtn = document.getElementById("generate-btn");

inputFile.addEventListener("change", changePDFStatus);

dropArea.addEventListener("dragover", (e) => {
  e.preventDefault();
});

dropArea.addEventListener("drop", (e) => {
  e.preventDefault();
  inputFile.files = e.dataTransfer.files;
  changePDFStatus();
});

function changePDFStatus() {
  imgView.src = "images/file_pdf.png";
  fileName.innerText = inputFile.files[0].name;
}

queryInput.addEventListener("input", (e) => {
  queryInput.style.height = "auto";
  let scHeight = e.target.scrollHeight;
  queryInput.style.height = `${scHeight}px`;
});

generateBtn.addEventListener("click", (e) => {
  var query = queryInput.value;
  var file = inputFile.files[0];

  if (file != undefined) {
    //Send data to AI
    console.log("Sending data to AI");
  }
});
