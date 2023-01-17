$(window).on("load",async function(){
    await delay(2000);
    $(".loader").fadeOut(1000);
    delay(1000).then(() => $(".content").fadeIn(1000));
})

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

var typed = new Typed(".auto-type", {
    strings: ["Developer", "Game Designer", "Graphic Designer"],
    typeSpeed: 150,
    backSpeed: 100,
    startDelay: 3000,
    loop: true
});

document.getElementById("btn").onclick = function () {
    location.href = "https://nouhidev.github.io";
};
