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
  if(document.getElementById("iframe_F2FVideo").getAttribute('data-flag') == "0"){ // DIY coding pane opens, video pane becomes smaller
    document.getElementById("iframe_F2FVideo").style.left="32%"
    document.getElementById("iframe_F2FVideo").style.width="60vw";
    document.getElementById("iframe_F2FVideo").style.height="33vw"; //60*9/16 = 33, YT video resolution is 16:9. (This code maintains the aspect ratio)
    document.getElementById('iframe_F2FVideo').setAttribute('data-flag', "1");

    mobileDevice = isMobile();
    if(mobileDevice) {
      alert("It feels like you are using using a mobile device. Please use a computer for better learning hands-on experience");
      document.getElementById("iframe_F2FMaterial").style.height=window.innerHeight*0.45 + "px";
    }
  }
  else { //DIY coding pane closes, video pane becomes larger
    document.getElementById("iframe_F2FVideo").style.left="0px";
    document.getElementById("iframe_F2FVideo").style.width="90vw";
    document.getElementById("iframe_F2FVideo").style.height="50vw"; //90*9/16 = 55, YT video resolution is 16:9. (This code maintains the aspect ratio)
    document.getElementById('iframe_F2FVideo').setAttribute('data-flag', "0");
  }
}

/* Function to check if it is a mobile device*/
function isMobile() {
    return(window.innerHeight > window.innerWidth) //Relace with a better checking. It will return false if the mobile-screen is flipped horizontal
}

function getF2FContentsFromF2FId(courseIdVal) { //Change it to read from google spreadsheet istead of local dictionary
    //urlGoogleSheet = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ36Mm6ggImeLTbs-tplzDCVE4Di1PNp4YpxMOIjTcftBB77PjgfPWAPNFhM8-nlYrdRvCpkYUqRNU_/pub?gid=0&single=true&output=csv";
    //console.log(courseIdVal);
    var courseContents = {
        "Onstitute_F2F_Python101": "https://onstitute.herokuapp.com:/meeting.html?name=Wm9vbU5hbWU%3D&mn=87997185462&email=&pwd=497047&role=0&lang=en-US&signature=MG1wUXQxNWNRTDZCenZUanRVcFIydy44Nzk5NzE4NTQ2Mi4xNjYxOTUwODI4NzMxLjAuL2cxMVBUMHB6ZHB4cU1GdnNFM1FYWE03dTQ4OVdOdlExTFVNQmZnY01Fcz0&china=0&apiKey=0mpQt15cQL6BzvTjtUpR2w, https://www.programiz.com/python-programming/online-compiler/, ./files_F2FMaterials/InstructorBios/bio_ArghyaKusumDas.html",
        "Onstitute_F2F_CPP101": "https://onstitute.herokuapp.com:/meeting.html?name=Wm9vbU5hbWU%3D&mn=87997185462&email=&pwd=497047&role=0&lang=en-US&signature=MG1wUXQxNWNRTDZCenZUanRVcFIydy44Nzk5NzE4NTQ2Mi4xNjYxOTUwODI4NzMxLjAuL2cxMVBUMHB6ZHB4cU1GdnNFM1FYWE03dTQ4OVdOdlExTFVNQmZnY01Fcz0&china=0&apiKey=0mpQt15cQL6BzvTjtUpR2w, https://www.programiz.com/cpp-programming/online-compiler/, ./files_F2FMaterials/InstructorBios/bio_ArghyaKusumDas.html",
        "Onstitute_F2F_Java101": "https://onstitute.herokuapp.com:/meeting.html?name=Wm9vbU5hbWU%3D&mn=87997185462&email=&pwd=497047&role=0&lang=en-US&signature=MG1wUXQxNWNRTDZCenZUanRVcFIydy44Nzk5NzE4NTQ2Mi4xNjYxOTUwODI4NzMxLjAuL2cxMVBUMHB6ZHB4cU1GdnNFM1FYWE03dTQ4OVdOdlExTFVNQmZnY01Fcz0&china=0&apiKey=0mpQt15cQL6BzvTjtUpR2w, https://www.programiz.com/java-programming/online-compiler/, ./files_F2FMaterials/InstructorBios/bio_ArghyaKusumDas.html",
        "Onstitute_F2F_Programming303": "https://onstitute.herokuapp.com:/meeting.html?name=Wm9vbU5hbWU%3D&mn=87997185462&email=&pwd=497047&role=0&lang=en-US&signature=MG1wUXQxNWNRTDZCenZUanRVcFIydy44Nzk5NzE4NTQ2Mi4xNjYxOTUwODI4NzMxLjAuL2cxMVBUMHB6ZHB4cU1GdnNFM1FYWE03dTQ4OVdOdlExTFVNQmZnY01Fcz0&china=0&apiKey=0mpQt15cQL6BzvTjtUpR2w, ./files_F2FMaterials/CustomIDEs/ide_MultipleIDE.html, ./files_F2FMaterials/InstructorBios/bio_ArghyaKusumDas.html",
        "Onstitute_F2F_BigData101": "https://www.youtube.com/embed/videoseries?list=PL4n5zDoQ7GrnI9odnWCKvJzSsVdQfe6t3, ./files_CourseMaterials/CustomIDEs/ide_None.html, ./files_CourseMaterials/InstructorBios/bio_ArghyaKusumDas.html",
        "Onstitute_F2F_Docker101": "https://www.youtube.com/embed/videoseries?list=PL4n5zDoQ7Grmzaqq9RFvTA_uIv56evEsB, ./files_CourseMaterials/CustomIDEs/ide_None.html, ./files_CourseMaterials/InstructorBios/bio_ArghyaKusumDas.html",
    }
    //console.log(courseVideo[courseIdVal]);
    return courseContents[courseIdVal];
}

function getPaidCustomerListFromF2FId(fefIdVal) {
  console.log("in getPaidCustomerListFromF2FId");
  var paidCustomerList = {
    "Onstitute_F2F_Python101": "1000, 2000, 3000, 4000",
    "Onstitute_F2F_CPP101": "1001, 2001, 3001, 4001",
    "Onstitute_F2F_Java101": "1002, 2002, 3002, 4002",
    "Onstitute_F2F_Programming303": "1003, 2003, 3003, 4003",
    "Onstitute_F2F_BigData101":"1004, 2004, 3004, 4004",
    "Onstitute_F2F_Docker101": "1005, 2005, 3005, 4005",
  }
  return paidCustomerList[fefIdVal];
}

/* Fuction to check if the customer paid the fees */
function isPaymentDone() {
  console.log("in isPaymentDone");
  const urlParams = new URLSearchParams(window.location.search);
  const f2fIdVal = urlParams.get('f2fId'); //Check which f2f it is
  paidCustomerKeyList = getPaidCustomerListFromF2FId(f2fIdVal).split(",");
  currentCustomerKey = prompt("Enter the 4character secret key:", "00000000");
  if (paidCustomerKeyList.includes(currentCustomerKey)) {
    console.log("Present");
    return true;
  }
  else{
    console.log("Absent");
    return false;
  }
}

/* Funtion to dynamically load video based on course*/
function loadVideoConf() { //executes onLoad
  //console.log("in loadVideo");
  var iframeVideoContainer = document.getElementById('iframe_F2FVideo');
  const urlParams = new URLSearchParams(window.location.search);
  paid = isPaymentDone();//Check for payment
  if(paid == false) {
    alert("Please pay the fees");
    window.location.replace("../F2FListTemplate/index_F2FListPage.html");
  }
  else {
    const courseIdVal = urlParams.get('f2fId');
    index = 0; //0 is the index of video-link in courseContents dictionary
    urlToDisplay = getF2FContentsFromF2FId(courseIdVal).split(",")[index];
    //console.log(urlToDisplay);
    iframeVideoContainer.src = urlToDisplay;
  }
}

/*Function to generate the link of Zoom meeting*/
function generateConfLink() {
    //console.log("in loadVideoConf");
    var iframeVideoContainer = document.getElementById('iframe_F2FVideo');
    var iframeCouseMaterialsContainer = document.getElementById('iframe_F2FMaterial');
    iframeCouseMaterialsContainer.src = "../../index1.html";
}

/* Function to load the content of the right iFrame */
function loadF2FMaterials(position) { //Similar to loadVideo but executes on button click with dynamic components based on their position
    //console.log("in loadF2FMaterials");
    var iframeCouseMaterialsContainer = document.getElementById('iframe_F2FMaterial');
    const urlParams = new URLSearchParams(window.location.search);
    const courseIdVal = urlParams.get('f2fId');
    index = position;
    urlToDisplay = getF2FContentsFromF2FId(courseIdVal).split(",")[index];
    iframeCouseMaterialsContainer.src = urlToDisplay;
}
