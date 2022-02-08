// Open and close login pop-up functions

function openLogin() {
  
  document.getElementById("loginPopup").style.display = "block";
  document.getElementById("regPopup").style.display = "none";
  document.getElementById("cmsPopup").style.display = "none";
}

function closeLogin() {
  
  document.getElementById("loginPopup").style.display = "none";
}
 
// Open and close register pop-up functions

function openReg() {

  document.getElementById("regPopup").style.display = "block";
  document.getElementById("loginPopup").style.display = "none";
  document.getElementById("cmsPopup").style.display = "none";
}

function closeReg() {

  document.getElementById("regPopup").style.display = "none";
}

// Open category link from navigation tab

function openProducts() {

  document.getElementById("container").style.display = "flex";
  document.getElementById("homeSlogan").style.display = "none";
  document.getElementById("cmsPopup").style.display = "none";
  document.getElementById("loginPopup").style.display = "none";
  document.getElementById("regPopup").style.display = "none";
}

// Open CMS banner pop-up function

function cmsLogin() {

  document.getElementById("cmsPopup").style.display = "block";
  document.getElementById("loginPopup").style.display = "none";
  document.getElementById("regPopup").style.display = "none";
}

// Function to show main background with slogan and hide products grid if logo is pressed

function showSlogan() {

  document.getElementById("homeSlogan").style.display = "block";
  document.getElementById("container").style.display = "none";
}

// Function to change page to CMS sub-page

function goToCms() {
  window.location = "cms.html";
}

// Function to return to main screen

function backToMain() {
  window.location = "index.html";
}