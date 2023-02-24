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
let openfluid = () => {
  window.open('https://drive.indonesiya.com/video.html?id=' + base)
}