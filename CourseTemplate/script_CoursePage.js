const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  console.log("Clicked");
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
    //console.log(document.getElementById('iframe_Video').getAttribute('data-flag'));
    screenPercentageOf_iframe_Video = 0.9
    if(document.getElementById('iframe_Video').getAttribute('data-flag') == "0"){
        document.getElementById("iframe_Video").style.left="29%"
        document.getElementById("iframe_Video").style.width=window.innerWidth*0.69+"px";
        document.getElementById("iframe_Video").style.height=window.innerHeight*0.69+"px";
        document.getElementById('iframe_Video').setAttribute('data-flag', "1");
    }
    else {
        document.getElementById("iframe_Video").style.left="0px";
        document.getElementById("iframe_Video").style.width=window.innerWidth*screenPercentageOf_iframe_Video + "px";
        document.getElementById("iframe_Video").style.height=window.innerHeight*screenPercentageOf_iframe_Video + "px";
        document.getElementById('iframe_Video').setAttribute('data-flag', "0");
    }
})



function loadCourse(myUrl) {
  document.getElementById('iframe_Course').src = myUrl;
}

/*function loadVideo(myUrl) {
  document.getElementById('iframe_Video').src = myUrl;
}*/

