var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 5000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("load").style.display = "block";
}
