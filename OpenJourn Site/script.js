import { GoogleGenerativeAI } from "https://cdn.jsdelivr.net/npm/@google/generative-ai@0.16.0/dist/index.min.js";
import { GoogleAIFileManager } from "https://cdn.jsdelivr.net/npm/@google/generative-ai@0.16.0/dist/index.min.js";

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
  console.log("Changed status");
  imgView.src = "images/file_pdf.png";
  fileName.innerText = "hello";
  console.log("About to upload");
  console.log("Uploading");
}

queryInput.addEventListener("input", (e) => {
  queryInput.style.height = "auto";
  let scHeight = e.target.scrollHeight;
  queryInput.style.height = `${scHeight}px`;
});

generateBtn.addEventListener("click", (e) => {
  var query = queryInput.value;
  var file = inputFile.files[0];
  console.log("hello");

  if (file != undefined) {
    //Send data to AI
  }
});
