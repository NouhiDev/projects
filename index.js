$(window).on("load",async function(){
    // await delay(2000);
    $(".loader").fadeOut(1000);
    delay(1000).then(() => $(".content").fadeIn(1000));
})

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function back_btn() {
    location.href = "https://nouhidev.github.io";
}

function remnants_btn() {
    location.href = "https://nouhidev.github.io/remnants/";
}

function rblx_btn() {
    location.href = "https://nouhidev.github.io/roblox-horrorlist/";
}