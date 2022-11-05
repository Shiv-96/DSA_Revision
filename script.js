var form = document.querySelector("#form");

form.addEventListener("submit", display);
var dsaArr = JSON.parse(localStorage.getItem("question")) || [];

// displayQlist(dsaArr)

window.addEventListener("load", function () {
  displayQlist(dsaArr);
});
function display(event) {
  event.preventDefault();
  dsaObj = {
    Title: form.title.value,
    Link: form.link.value,
    Topic: form.topic.value,
    Level: form.difficulty.value,
  };
  dsaArr.push(dsaObj);

  // console.log(dsaArr)

  displayQlist(dsaArr);
  localStorage.setItem("question", JSON.stringify(dsaArr));
  window.location.reload();
}

function displayQlist(dsaArr) {
  document.querySelector("tbody").innerHTML = "";

  dsaArr.forEach(function (el) {
    // localStorage.setItem("Question", JSON.stringify(dsaArr))
    var tr = document.createElement("tr");
    var tiitle = document.createElement("td");
    tiitle.innerText = el.Title;
    var link = document.createElement("td");
    var QLink = document.createElement("a");
    QLink.setAttribute("href", el.Link);
    QLink.setAttribute("target", "_blank");
    QLink.innerText = el.Link;
    QLink.style.textDecoration = "none";

    link.append(QLink);
    // link.innerText = el.Link;
    var level = document.createElement("td");
    level.innerText = el.Level;

    var topic = document.createElement("td");
    topic.innerText = el.Topic;

    var revision = document.createElement("td");
    if (level.innerText == "Easy") {
      revision.innerText = "No";
      // alert("Yes")
    } else {
      revision.innerText = "Yes";
      // alert("No")
    }
    tr.append(tiitle, link, level, topic, revision);

    document.querySelector("tbody").append(tr);
  });
}
