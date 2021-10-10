function openTab(evt, TabName) {
  //hiding all the sections
  var tabcontent = document.getElementsByClassName("tabcontent");
  var i;
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  //making all buttons inactive
  var tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }

  //displaying the required block
  document.getElementById(TabName).style.display = "block";
  //activating the realted button
  evt.currentTarget.className += "active";
}

function display_time() {
  var dt = new Date();
  var elem = document.getElementById("datetime");
  elem.innerHTML = dt.toLocaleString();
  setTimeout("display_time()", 999);
}
display_time();

function display_default() {
  Introduction.style.display = "block";
}
