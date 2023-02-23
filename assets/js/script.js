function getparam(a, e) {
  return e || (e = window.location.href), new URL(e).searchParams.get(a)
}
let s = a => document.getElementById(a);


function getIdFromUrl(url) {
  return url.match(/[-\w]{25,}/);
}
let apikey = 'AIzaSyCHWUFpWNS0hedAsA1Rx1Yunp_CfrbWVvs';

let get = () => {
  getbase();
}
let getbase = () => {
  let ply = [];
  /*
    ply.videourl = `https://www.googleapis.com/drive/v3/files/${getIdFromUrl(s('videourl').value) }?alt=media&key=${apikey}`;

  let poster = "";
      if(s('posterurl').value){
       poster = s('posterurl').value ;}
  else {
    poster = 'https://lh3.googleusercontent.com/d/'+getIdFromUrl(s('videourl').value);
  }
    ply.posterurl = poster ; 
    */

  ply.id = getIdFromUrl(s('videourl').value);

  // ply.videotitle = s('videotitle').value;
  console.log(ply);

  var arr = JSON.stringify(Object.assign({}, ply))
  console.log(btoa(arr));
  window.base = btoa(arr);
  iframe();
  return btoa(arr);
}

//Player Openers (diff. func. coding intentionally)
let openplyr = () => {
  window.open('https://drive.indonesiya.com/video/plyr.html?id=' + base)
}
let openfluid = () => {
  window.open('https://drive.indonesiya.com/video/fluid.html?id=' + base)
}
let openafterglow = () => {
  window.open('https://drive.indonesiya.com/video/afterglow.html?id=' + base)
}
let openmediaelements = () => {
  window.open('https://drive.indonesiya.com/video/mediaelements.html?id=' + base)
}
let openvlitejs = () => {
  window.open('https://drive.indonesiya.com/video/vlitejs.html?id=' + base)
}

let pmsg = 'Copy Embed Code';
//Player Embedders
let embedplyr = () => {
  prompt(pmsg, `<iframe width="560" height="315" 
scrolling="no"
src="https://drive.indonesiya.com/video/plyr.html?id=${base}" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture" allowfullscreen>
</iframe>`)
}
let embedfluid = () => {
  prompt(pmsg, `<iframe width="560" height="315" 
scrolling="no"
src="https://drive.indonesiya.com/video/fluid.html?id=${base}" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture" allowfullscreen>
</iframe>`)
}
let embedafterglow = () => {
  prompt(pmsg, `<iframe width="560" height="315" 
scrolling="no"
src="https://drive.indonesiya.com/video/afterglow.html?id=${base}" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture" allowfullscreen>
</iframe>`)
}
let embedmediaelements = () => {
  prompt(pmsg, `<iframe width="560" height="315" 
scrolling="no"
src="https://drive.indonesiya.com/video/mediaelements.html?id=${base}" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture" allowfullscreen>
</iframe>`)
}
let embedvlitejs = () => {
  prompt(pmsg, `<iframe width="560" height="315" 
scrolling="no"
src="https://drive.indonesiya.com/video/vlitejs.html?id=${base}" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
gyroscope; picture-in-picture" allowfullscreen>
</iframe>`);
}

let iframe = () => {
  s('afterglow').src = 'https://drive.indonesiya.com/video/afterglow.html?id=' + base;
  s('fluid').src = 'https://drive.indonesiya.com/video/fluid.html?id=' + base;
  s('plyr').src = 'https://drive.indonesiya.com/video/plyr.html?id=' + base;
  s('vlitejs').src = 'https://drive.indonesiya.com/video/vlitejs.html?id=' + base;
  s('mediaelements').src = 'https://drive.indonesiya.com/video/mediaelements.html?id=' + base;

}