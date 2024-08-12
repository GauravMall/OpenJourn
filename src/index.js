const dropArea = document.getElementById("drag-drop-area");
const inputFile = document.getElementById("input-file");
const imgView = document.getElementById("img-view");
const imgContainer = document.getElementById("img-container");

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
  imgView.src = "../public/images/file_pdf.png" ;
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
    var result = `<h1>Response to the Question</h1><p>This article doesn't go into the specifics of engineering wrist-worn biosensors. The focus is on using piezoelectric sensors to detect finger gestures.</p><div class="report"><h1>OpenJourn Report</h1><p><b>Article Name: </b>Detecting finger gestures with a wrist worn piezoelectric sensor array</p><p><b>Article Authors: </b>Riley Booth, Dr. Peter Goldsmith</p><p><b>DOI Link: </b>Cannot be found</p><h2>Overall Assessment</h2><p>This article presents a novel approach to detecting finger gestures using piezoelectric sensors on a wearable wristband. The study demonstrates the potential of this approach for creating a wearer-independent, trainable system. While the research has some limitations and areas for improvement, it provides valuable insights into the use of piezoelectrics for human-computer interaction. The study is well-written and clearly explains the research methodology and findings.</p><h3>Grade</h3><p>A</p><h2>Scope and Main Points</h2><p>The article explores the use of piezoelectric sensors in a wearable wristband to detect individual finger gestures. The authors describe the system's design, data acquisition, and signal processing methods. The study aims to demonstrate the feasibility of this approach for wearer-independent, trainable gesture recognition. The main findings include the effectiveness of the maximum value window operation, the importance of filtering the signals, and the potential for future research on optimizing the system's performance.</p><p>Key points and contributions of the study include:</p><ul><li>A novel approach using piezoelectric sensors for gesture detection on a wearable wristband.</li><li>The development of a system that is wearer-independent and requires no training.</li><li>The use of continuous signal windowing to identify bulk changes in signal features.</li><li>The comparison of different window lengths and filtering methods for signal processing.</li><li>The identification of the maximum value window operation as the most effective method.</li></ul><h2>Research Methods</h2><p>The authors used a combination of hardware and software to develop and test their system. The hardware consisted of a wearable wristband with an array of six piezoelectric sensors, a signal conditioning circuit, and a microcontroller. The software included a signal processing algorithm for data acquisition, filtering, windowing, and thresholding.</p><p>The research methods used in the study are appropriate and rigorous. The authors clearly describe their design, data collection, and analysis methods. They provide details on the sampling method, the number of participants, the gestures used, and the data analysis techniques.</p><p>The authors acknowledge several potential limitations of their study, including the small sample size, the limited range of gestures tested, and the lack of testing in real-world environments. These limitations should be considered when interpreting the study's findings.</p><h2>Errors and Inaccuracies</h2><p>The study's findings are generally reliable and valid, but there are some areas for improvement. One potential source of error is the use of the keyboard press channel as a proxy for the true gesture event, particularly for jab and press gestures. This could introduce some inaccuracies in the timing analysis.</p><p>The authors could also provide a more detailed analysis of the performance of different window operations and threshold values. This would help to better understand the limitations and strengths of each method.</p><h2>Conclusion</h2><p>The authors conclude that their study demonstrates the feasibility of using piezoelectric sensors for gesture detection on a wearable wristband. They highlight the effectiveness of the maximum value window operation and the importance of filtering the signal. The authors acknowledge the study's limitations but suggest that their approach has potential for further development and optimization.</p><p>The conclusions are generally supported by the evidence presented in the article. However, the study could be strengthened by a more comprehensive analysis of the performance of different window operations and threshold values.</p><h2>Journal Trustworthiness</h2><p>The article was published in the IEEE International Conference on Systems, Man, and Cybernetics (SMC), a reputable conference in the field of engineering and computer science. The IEEE is a well-established organization with a strong reputation for publishing high-quality research. </p><p>The journal's peer-review process is likely to be rigorous, as evidenced by the overall quality of the article. The authors have clearly described their methodology and presented their findings in a clear and concise manner. The study also addresses potential limitations and suggests avenues for future research.</p><p>Overall, the journal is trustworthy and the article is credible. The findings are generally reliable and the study is well-conducted, though further investigation into the various parameters could be performed.</p></div>`;
    printReport(result)
  }
});

function printReport(report) {
  document.getElementById("report-area").innerHTML = report;
}
