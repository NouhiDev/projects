$(window).on("load",async function(){ await delay(1000); $(".loader").fadeOut(1000); delay(1000).then(() => $(".content").fadeIn(1000)); }) 

function delay(time) { return new Promise(resolve => setTimeout(resolve, time)); } 
