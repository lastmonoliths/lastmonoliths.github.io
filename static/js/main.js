$(function () {
    var nav = false;
    $("#mainNav").click(function () {
        
        if (nav == false) {
            $(this).addClass("nav-rote");
            nav = true;
        } else {
            $(this).removeClass("nav-rote");
            nav = false;
        }
        $("#mainList").toggle("fold");
    });
    
});


// window.onload = function () {
//     let mainNav = document.getElementById("mainNav");
//     mainNav.onclick = function () {
        
//     }
// }