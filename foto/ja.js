window.onload = function () {
  document.getElementById("gra").getElementsByTagName("a")[0].onclick =
    function () {
      var a, b, i, k;
      var k = [
        "9ka",
        "9ki",
        "9pi",
        "9tr",
        "10ka",
        "10ki",
        "10pi",
        "10tr",
        "11ka",
        "11ki",
        "11pi",
        "11tr",
        "12ka",
        "12ki",
        "12pi",
        "12tr",
        "13ka",
        "13ki",
        "13pi",
        "13tr",
        "14ka",
        "14ki",
        "14pi",
        "14tr",
      ];

      a = k.splice(Math.floor(Math.random() * k.length), 1)[0];
      b = k.splice(Math.floor(Math.random() * k.length), 1)[0];

      document.getElementById("gra").getElementsByTagName("img")[0].src =
        "karty/" + a + ".png";
      document.getElementById("gra").getElementsByTagName("img")[1].src =
        "karty/" + b + ".png";

      a = parseInt(a);
      b = parseInt(b);

      if (a > b) k = "Wygrałeś";
      else if (a < b) k = "Przegrałeś";
      else if (a == b) k = "Remis";

      document.getElementById("gra").getElementsByTagName("p")[0].innerHTML = k;
      return false;
    };
};
