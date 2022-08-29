function topMenu() {
    var x = document.getElementById("topMenuBar");
    if (x.className === "nav-top") {
      x.className += " responsive";
    } else {
      x.className = "nav-top";
    }
  }