$(".themeChange").on("click", function() {
    if ($(this).hasClass("regular")){
        $("#theme").attr("href","css/blank.css")
        console.log("it works");
    }

} )