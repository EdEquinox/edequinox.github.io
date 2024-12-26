const data = [];
let item;
let nameArtist = '';
let codeArtist = '';
let linkwithnote = '';
let linkwithoutnote = '';
let help = 0;
let costumMode = 0;
let actuallink = '';
let initial = 0;

fetch('data/data_spotle.json')
  .then(response => response.json())
  .then(jsonData => {
    data.push(...jsonData);

    item = data[Math.floor(Math.random() * data.length)];

    initapp(item);
  })
  .catch(error => console.error('Error loading JSON data:', error));

function initapp(item) {
  nameArtist = item.artist;
  codeArtist = item.encodedName;

  const firstLetter = nameArtist.charAt(0);
  const note = "&note=";
  // encode to base 64 
  const encodednote = btoa(firstLetter);
  linkwithnote = "https://spotle.io/?artist="+codeArtist+note+encodednote;
  linkwithoutnote = "https://spotle.io/?artist="+codeArtist;

  if(initial == 0){
    showText(linkwithoutnote);
    actuallink = linkwithoutnote;
    initial = 1;
  }
  else{
    if (help == 0){
      showText(linkwithoutnote);
      actuallink = linkwithoutnote;
    }
    else{
      showText(linkwithnote);
      actuallink = linkwithnote;
    }
  }  
}

function showText(link) {
  const myElement = document.getElementById('link');
  myElement.innerHTML = link; // Set your desired text
  myElement.addEventListener('click', function() {
    window.open(actuallink);
    reloadPage();
  } );
}

function reloadPage() {
  item = data[Math.floor(Math.random() * data.length)];
  initapp(item);
}

function toggleHelp() {
  const helpdiv = document.getElementById('helpdiv');
  helpdiv.addEventListener('click', function() {
    if (help == 0){
      help = 1;
      showText(linkwithnote);
      actuallink = linkwithnote;
    }
    else{
      help = 0;
      showText(linkwithoutnote);
      actuallink = linkwithoutnote;
    }
  });
}

function easymode() {
    var items = data.slice(0,200);
    var item = items[Math.floor(Math.random() * items.length)];
    var newencodedName = item.encodedName;
    var link = "https://spotle.io/?artist="+newencodedName;
    actuallink = link;
    costumMode = 1;
    window.open(link);
}

function openLink() {
  window.open(actuallink);
}

function genZ(){
  var genzartists = data.filter(artist => artist.debut_album_year >= 2018 && artist.debut_album_year <= 2024);
  var item = genzartists[Math.floor(Math.random() * genzartists.length)]
  var newencodedName = item.encodedName;
  var link = "https://spotle.io/?artist="+newencodedName;
  actuallink = link;
  costumMode = 1;
  window.open(link);
}

function y80s90s2000s(){
  var artists80s90s2000s = data.filter(artist => artist.debut_album_year >= 1980 && artist.debut_album_year <= 2009);
  var item = artists80s90s2000s[Math.floor(Math.random() * artists80s90s2000s.length)];
  var newencodedName = item.encodedName;
  var link = "https://spotle.io/?artist="+newencodedName;
  actuallink = link;
  costumMode = 1;
  window.open(link);
}

