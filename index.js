// Loader
$(window).on("load", async function () {
  // await delay(2000);
  $(".loader").fadeOut(1000);
  await delay(1000).then(() => $(".content").fadeIn(1000));
  document.getElementById("cards").style.display = "flex";
});

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

// Hover Effect
document.getElementById("cards").onmousemove = (e) => {
  for (const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
};

// Card Onclicks
function games_btn() {
  location.href = "https://nouhi.dev/games/";
}

function gfx_btn() {
  location.href = "https://www.behance.net/wolfgfx";
}

function other_btn() {
  location.href = "https://nouhi.dev/other-projects/";
}

function back_btn() {
    location.href = "https://nouhi.dev/";
}
