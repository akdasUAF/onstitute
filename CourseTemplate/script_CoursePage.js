const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

/* Function for decoration: moving showcase, resize video */
menuToggle.addEventListener('click', () => {
  console.log("Clicked");
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
    
    if(document.getElementById('iframe_Video').getAttribute('data-flag') == "0"){ // DIY coding pane opens video becomes smaller
        document.getElementById("iframe_Video").style.left="32%"
        document.getElementById("iframe_Video").style.width="60vw";
        document.getElementById("iframe_Video").style.height="33vw"; //60*9/16 = 33, YT video resolution is 16:9. (This code maintains the aspect ratio)
        document.getElementById('iframe_Video').setAttribute('data-flag', "1");
        
        document.getElementById('iframe_Course').style.height="33vw";
    }
    else { //DIY coding pane closes, video becomes larger
        document.getElementById("iframe_Video").style.left="0px";
        document.getElementById("iframe_Video").style.width="90vw";
        document.getElementById("iframe_Video").style.height="50vw"; //0*9/16 = 33, YT video resolution is 16:9. (This code maintains the aspect ratio)
        document.getElementById('iframe_Video').setAttribute('data-flag', "0");
    }
})

/* Function to load the content of the right iFrame */
function loadCourse(myUrl) {
  var iframeVideoContainer = document.getElementById('iframe_Video');
  const urlParams = new URLSearchParams(window.location.search);
  const courseIdVal = urlParams.get('courseId');
  document.getElementById('iframe_Course').src = myUrl;
}

function getVideoUrlFromCourseId(courseIdVal) { //Change it to read from google spreadsheet istead of local dictionary
    //urlGoogleSheet = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ36Mm6ggImeLTbs-tplzDCVE4Di1PNp4YpxMOIjTcftBB77PjgfPWAPNFhM8-nlYrdRvCpkYUqRNU_/pub?gid=0&single=true&output=csv";
    //console.log(courseIdVal);
    var courseVideo = {
        "Onstitute_Course_Python101": "https://www.youtube.com/embed/videoseries?list=PLG6Y-NQXjFeZL7gfbiczvv3I8WXef1ikB",
        "Onstitute_Course_CPP101": "https://www.youtube.com/embed/videoseries?list=PLG6Y-NQXjFeYNukl0K7KOfuXq0SheFFpG",
        "Onstitute_Course_Java101": "https://www.youtube.com/embed/videoseries?list=PLG6Y-NQXjFeZoRs632wHPkc4-42LOdfRw",
        "Onstitute_Course_Programming303": "https://www.youtube.com/embed/videoseries?list=PLG6Y-NQXjFeZPXgF5x3mhyRVj9W0fQR2l",
        "Onstitute_Course_BigData101": "https://www.youtube.com/embed/videoseries?list=PL4n5zDoQ7GrnI9odnWCKvJzSsVdQfe6t3",
        "Onstitute_Course_Docker101": "https://www.youtube.com/embed/videoseries?list=PL4n5zDoQ7Grmzaqq9RFvTA_uIv56evEsB",
        "Onstitute_Workshop_AtBITKol": "https://www.youtube.com/embed/videoseries?list=PLG6Y-NQXjFeYeKVlv4Lmd5aXkJNN9dpWW",
        "Onstitute_Workshop_AtNirmaUniversity": "https://www.youtube.com/embed/videoseries?list=PLG6Y-NQXjFeYNdReEDRxJH9mQUJWiCk7J",
        "Onstitute_Workshop_OpenCAPI": "https://www.youtube.com/embed/videoseries?list=PLG6Y-NQXjFeYeKVlv4Lmd5aXkJNN9dpWW",
        "Onstitute_Workshop_AtUAFFairbanks": "https://www.youtube.com/embed/videoseries?list=PLG6Y-NQXjFeYaYrCuW2CMfZeeLtdLeP_9"
    }
    //console.log(courseVideo[courseIdVal]);
    return courseVideo[courseIdVal];
}

/* Funtion to dynamically load video based on course*/
function loadVideo() {
  var iframeVideoContainer = document.getElementById('iframe_Video');
  const urlParams = new URLSearchParams(window.location.search);
  const courseIdVal = urlParams.get('courseId');
  iframeVideoContainer.src = getVideoUrlFromCourseId(courseIdVal)
}
