function openFloatingDiv(syllabusPath) {
  //console.log("in openFloatingDiv:" + syllabusPath);
    document.getElementById('iframe_Syllabus').src = syllabusPath
  document.getElementById('centerDIV').style.display = 'block';
}

function closeFloatingDiv() {
  //console.log("in closeFloatingDiv");
  document.getElementById('centerDIV').style.display = 'none';
}
