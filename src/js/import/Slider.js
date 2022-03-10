let modal = document.querySelector("#myModal");

// let btn = document.querySelector("#myBtn");

let span = document.getElementsByClassName("close")[0];
let youtubeLink = document.getElementById("Youtube");

const arrayLink = {
  0: "https://www.youtube.com/embed/QI5a5YbUW6w",
  1: "https://www.youtube.com/embed/dBDX7ERYvCc",
  2: "https://www.youtube.com/embed/dBDX7ERYvCc",
  3: "https://www.youtube.com/embed/dBDX7ERYvCc",
};

span.onclick = function () {
  modal.style.display = "none";

  location.reload();
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    location.reload();
  }
};

const buttons = document.querySelectorAll(".feedback-video");
// console.log(buttons);
for (let i = 0; i < buttons.length; i++) {
  const btns = buttons[i];
  btns.addEventListener("click", () => {
    modal.style.display = "block";

    youtubeLink.innerHTML = `<iframe  width="100%" height=700" src="${arrayLink[i]}" title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  });
}

