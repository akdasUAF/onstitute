const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

/* Function for decoration: moving showcase, resize video */
menuToggle.addEventListener('click', () => {
  console.log("Clicked");
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
    
  adjustContentSizes();
})

/* Function to adjust the content sizes to fit all content in the screen*/
function adjustContentSizes() {
  if(document.getElementById("iframe_CourseVideo").getAttribute('data-flag') == "0"){ // DIY coding pane opens, video pane becomes smaller
    document.getElementById("iframe_CourseVideo").style.left="32%"
    document.getElementById("iframe_CourseVideo").style.width="60vw";
    document.getElementById("iframe_CourseVideo").style.height="33vw"; //60*9/16 = 33, YT video resolution is 16:9. (This code maintains the aspect ratio)
    document.getElementById('iframe_CourseVideo').setAttribute('data-flag', "1");

    mobileDevice = isMobile();
    if(mobileDevice) {
      alert("It feels like you are using using a mobile device. Please use a computer for better learning hands-on experience");
      document.getElementById("iframe_CourseMaterial").style.height=window.innerHeight*0.45 + "px";
    }
  }
  else { //DIY coding pane closes, video pane becomes larger
    document.getElementById("iframe_CourseVideo").style.left="0px";
    document.getElementById("iframe_CourseVideo").style.width="90vw";
    document.getElementById("iframe_CourseVideo").style.height="50vw"; //90*9/16 = 55, YT video resolution is 16:9. (This code maintains the aspect ratio)
    document.getElementById('iframe_CourseVideo').setAttribute('data-flag', "0");
  }
}

/* Function to check if it is a mobile device*/
function isMobile() {
    return(window.innerHeight > window.innerWidth) //Relace with a better checking. It will return false if the mobile-screen is flipped horizontal
}

function getCourseContentsFromCourseId(courseIdVal) { //Change it to read from google spreadsheet istead of local dictionary
    //urlGoogleSheet = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ36Mm6ggImeLTbs-tplzDCVE4Di1PNp4YpxMOIjTcftBB77PjgfPWAPNFhM8-nlYrdRvCpkYUqRNU_/pub?gid=0&single=true&output=csv";
    //console.log(courseIdVal);
    var courseContents = {
        "Onstitute_Course_Python101": "https://www.youtube.com/embed/videoseries?list=PLG6Y-NQXjFeZL7gfbiczvv3I8WXef1ikB, https://www.programiz.com/python-programming/online-compiler/, ./files_CourseMaterials/InstructorBios/bio_ArghyaKusumDas.html",
        "Onstitute_Course_CPP101": "https://www.youtube.com/embed/videoseries?list=PLG6Y-NQXjFeYNukl0K7KOfuXq0SheFFpG, https://www.programiz.com/cpp-programming/online-compiler/, ./files_CourseMaterials/InstructorBios/bio_ArghyaKusumDas.html",
        "Onstitute_Course_Java101": "https://www.youtube.com/embed/videoseries?list=PLG6Y-NQXjFeZoRs632wHPkc4-42LOdfRw, https://www.programiz.com/java-programming/online-compiler/, ./files_CourseMaterials/InstructorBios/bio_ArghyaKusumDas.html",
        "Onstitute_Course_Programming303": "https://www.youtube.com/embed/videoseries?list=PLG6Y-NQXjFeZPXgF5x3mhyRVj9W0fQR2l, ./files_CourseMaterials/CustomIDEs/ide_MultipleIDE.html, ./files_CourseMaterials/InstructorBios/bio_ArghyaKusumDas.html",
        "Onstitute_Course_BigData101": "https://www.youtube.com/embed/videoseries?list=PL4n5zDoQ7GrnI9odnWCKvJzSsVdQfe6t3, ./files_CourseMaterials/CustomIDEs/ide_None.html, ./files_CourseMaterials/InstructorBios/bio_ArghyaKusumDas.html",
        "Onstitute_Course_Docker101": "https://www.youtube.com/embed/videoseries?list=PL4n5zDoQ7Grmzaqq9RFvTA_uIv56evEsB, ./files_CourseMaterials/CustomIDEs/ide_None.html, ./files_CourseMaterials/InstructorBios/bio_ArghyaKusumDas.html",
        "Onstitute_Workshop_AtBITKol": "https://www.youtube.com/embed/videoseries?list=PLG6Y-NQXjFeYeKVlv4Lmd5aXkJNN9dpWW, ./files_CourseMaterials/CustomIDEs/ide_None.html, ./files_CourseMaterials/InstructorBios/bio_ArghyaKusumDas.html",
        "Onstitute_Workshop_AtNirmaUniversity": "https://www.youtube.com/embed/videoseries?list=PLG6Y-NQXjFeYNdReEDRxJH9mQUJWiCk7J, ./files_CourseMaterials/CustomIDEs/ide_None.html, ./files_CourseMaterials/InstructorBios/bio_ArghyaKusumDas.html",
        "Onstitute_Workshop_OpenCAPI": "https://www.youtube.com/embed/videoseries?list=PLG6Y-NQXjFeYeKVlv4Lmd5aXkJNN9dpWW, ./files_CourseMaterials/CustomIDEs/ide_None.html, ./files_CourseMaterials/InstructorBios/bio_ArghyaKusumDas.html",
        "Onstitute_Workshop_AtUAFFairbanks": "https://www.youtube.com/embed/videoseries?list=PLG6Y-NQXjFeYaYrCuW2CMfZeeLtdLeP_9, ./files_CourseMaterials/CustomIDEs/ide_None.html, .files_CourseMaterials/InstructorBios/bio_ArghyaKusumDas.html"
    }
    //console.log(courseVideo[courseIdVal]);
    return courseContents[courseIdVal];
}

/* Funtion to dynamically load video based on course*/
function loadVideo() { //executes onLoad
  //console.log("in loadVideo");
  var iframeVideoContainer = document.getElementById('iframe_CourseVideo');
  const urlParams = new URLSearchParams(window.location.search);
  const courseIdVal = urlParams.get('courseId');
  index = 0; //0 is the index of video-link in courseContents dictionary
  urlToDisplay = getCourseContentsFromCourseId(courseIdVal).split(",")[index];
  //console.log(urlToDisplay);
  iframeVideoContainer.src = urlToDisplay;
}

function loadVideoConf() {
    console.log("in loadVideoConf");
    var iframeVideoContainer = document.getElementById('iframe_CourseVideo');
    var iframeCouseMaterialsContainer = document.getElementById('iframe_CourseMaterial');
    iframeCouseMaterialsContainer.src = "https://zoomnodeclient.herokuapp.com/";
}

/* Function to load the content of the right iFrame */
function loadCourseMaterials(position) { //Similar to loadVideo but executes on button click with dynamic components based on their position
    //console.log("in loadCourseMaterials");
    var iframeCouseMaterialsContainer = document.getElementById('iframe_CourseMaterial');
    const urlParams = new URLSearchParams(window.location.search);
    const courseIdVal = urlParams.get('courseId');
    index = position;
    urlToDisplay = getCourseContentsFromCourseId(courseIdVal).split(",")[index];
    //console.log(urlToDisplay);
    if(urlToDisplay.includes("+")) { //multiple html to be displayed in one iframe.
        /*urls = urlToDisplay.split("+");
        htmlContent = 'data:text/html;charset=utf-8,'
        for each url in urls {
            iframeCouseMaterialsContainer.contents().append(url)
        }
        iframeCouseMaterialsContainer.src = htmlContent();*/
    }
    else {
      iframeCouseMaterialsContainer.src = urlToDisplay;
    }
}
