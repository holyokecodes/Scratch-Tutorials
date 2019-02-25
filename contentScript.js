function loadTutorial(id, title) {

    const html = "<div class='tutorial draggable'><div class='tutorial-header'><div class='tutorial-title'><img src='/static/assets/b433ee02a13fa2a12f7f7059f1f6729a.svg'> <span>" + title + "</span></div><div class='close-tutorial card_remove-button_1F8SI'><span>Close</span><img class='card_close-icon_1FYf5' src='/static/assets/a11c1802ec38e7fe60918fb52186261f.svg'></div></div><div class='tutorial-content'><iframe src='https://scratchscience.netlify.com/embed/"+id+"'/></div></div>";

    document.querySelector(".gui").insertAdjacentHTML("afterbegin", html );
    $(".draggable" ).draggable();
    $(".tutorial-content iframe").fadeIn(1000)

    document.querySelector('.close-tutorial').addEventListener("click", function () {
        let tutorial = document.querySelector(".tutorial");
        tutorial.parentNode.removeChild(tutorial);
    })
}

