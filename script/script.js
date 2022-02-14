function openLogin() {
  document.getElementById('loginPopup').style.display = 'block';
}

function closeLogin() {
  let xhr = new XMLHttpRequest();
  let email = document.getElementById("loginEmailInput").value;
  let password = document.getElementById("passwordEmailInput").value;
  xhr.open('GET', `../php/login.php?email=${email}&password=${password}`, true);
  xhr.onload = function () {
    if (this.status == 200) {
      console.log(this.responseText)
      if (this.responseText == '[]') {
        //login failed
        document.getElementById('loginError').innerHTML = 'Wrong email or password';
      } else {
        let response = JSON.parse(this.responseText);
        localStorage.setItem("user",JSON.stringify(response));
        document.getElementById('loginPopup').style.display = 'none';
        location.reload(true);
      }
    }
  };
  xhr.send("email=" + email + "&password=" + password);
}

function openReg() {
  document.getElementById('regPopup').style.display = 'block';
}

function closeReg() {
  let xhr = new XMLHttpRequest();

  xhr.open('POST', '../php/register.php', true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onload = function () {
    if (this.status == 200) {
      console.log(this.responseText);
    }
  };
  let email = document.getElementById("emailInput").value;
  let username = document.getElementById("usernameInput").value;
  let password = document.getElementById("passwordInput").value;
  xhr.send("email=" + email + "&username=" + username + "&password=" + password);


  document.getElementById('regPopup').style.display = 'none';
}

function sortDescedingByPrice() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "../php/script.php", true);
  xhr.onload = function () {
    if (this.status == 200) {
      let response = JSON.parse(this.responseText);
      response.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      document.getElementsByClassName("container")[0].innerHTML = '';
      response.forEach((product) => {
        const cardHtml = `
                          <div class="card">
                                  <div class="card-image">
                                    <img class="productImg" src="../images/${product.images[0]}" alt="#">
                                  </div>
                                  <p>
                                    <a href="#">${product.title}</a></p>
                                  <p>${product.price}£</p>
                          </div>`;
        document.getElementsByClassName("container")[0].innerHTML += cardHtml;
      });
    }
  }
  xhr.send();
}
function sortAscedingByPrice() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "../php/script.php", true);
  xhr.onload = function () {
    if (this.status == 200) {
      let response = JSON.parse(this.responseText);
      response.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      document.getElementsByClassName("container")[0].innerHTML = '';
      response.forEach((product) => {
        const cardHtml = `
                          <div class="card">
                            <div class="card-image">
                              <img class="productImg" src="../images/${product.images[0]}" alt="#">
                            </div>
                            <p>
                              <a href="#">${product.title}</a></p>
                            <p>${product.price}£</p>
                          </div>`;
        document.getElementsByClassName("container")[0].innerHTML += cardHtml;
      });
    }
  }
  xhr.send();
}
function getProducts() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "../php/script.php", true);
  xhr.onload = function () {
    if (this.status == 200) {
      let response = JSON.parse(this.responseText);
      document.getElementsByClassName("container")[0].innerHTML = '';
      response.forEach((product) => {
        const cardHtml = `
                          <div class="card">
                                  <div class="card-image">
                                    <img class="productImg" src="../images/${product.images[0]}" alt="#">
                                  </div>
                                  <p>
                                      <a href="#">${product.title}</a></p>
                                  <p>${product.price}£</p>
                          </div>`;
        document.getElementsByClassName("container")[0].innerHTML += cardHtml;
      });

    }
  }
  xhr.send();
}
function getProductsByCategory(id) {
  let category = document.getElementById(id).innerHTML.trim().toLowerCase();
  var xhr = new XMLHttpRequest();
  xhr.open("GET", `../php/getProductsByCategory.php?category=${category}`, true);
  xhr.onload = function () {
    if (this.status == 200) {
      let response = JSON.parse(this.responseText);
      response.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      document.getElementsByClassName("container")[0].innerHTML = '';
      response.forEach((product) => {
        const cardHtml = `
                          <div class="card">
                                  <div class="card-image">
                                    <img class="productImg" src="../images/${product.images[0]}" alt="#">
                                  </div>
                                  <p>
                                      <a href="#">${product.title}</a></p>
                                  <p>${product.price}£</p>
                          </div>`;
        document.getElementsByClassName("container")[0].innerHTML += cardHtml;
      });
    }
  }
  xhr.send();
}
function logout() {
  localStorage.removeItem("user");
  location.reload(true);
}
window.onload = onLoad();
//when page Avalon.html load
function onLoad() {
  document.getElementsByClassName("logReg")[0].innerHTML = '';
  if (localStorage.getItem("user",)) {
    document.getElementsByClassName("logReg")[0].innerHTML = ` 
                <li>
                    <a href="javascript:logout();"
                       style="color:black; padding-left: 5px; padding-right: 0px;">Logout</a>
                </li>`;
  } else {
    document.getElementsByClassName("logReg")[0].innerHTML = ` 
    <li>
      <a href="javascript:openLogin();"
      style="color:black; padding-left: 5px; padding-right: 0px;">Login</a></li>
    <li>
      <a href="javascript:openReg();"
      style="color:black; padding-left: 5px; padding-right: 0px;">Register</a>
    </li>`
  }
}

