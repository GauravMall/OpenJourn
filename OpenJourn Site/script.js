
const dropArea = document.getElementById("drag-drop-area");
const inputFile = document.getElementById("input-file");
const imgView = document.getElementById("img-view");
const imgContaienr = document.getElementById("img-container");

const queryInput = document.querySelector("textarea");

const fileName = document.getElementById("file-name")

inputFile.addEventListener("change", changePDFStatus);

function changePDFStatus() {
    imgView.src = "images/file_pdf.png";
    fileName.innerText = inputFile.files[0].name;
}

dropArea.addEventListener("dragover", e => {
  e.preventDefault();
});

dropArea.addEventListener("drop", e => {
  e.preventDefault();
  inputFile.files = e.dataTransfer.files;
  changePDFStatus();
})

queryInput.addEventListener("input", e => {
  queryInput.style.height = "auto";
  let scHeight = e.target.scrollHeight;
  queryInput.style.height = `${scHeight}px`;
})
