$(document).ready(function(){
    let item;
    if ($(window).width() <= '768') {
        item = 2;
    } 
    if ($(window).width() <= '425') {
        item = 1;
    }
    else {
		item = 2;
	}
    $(".owl-carousel").owlCarousel({
        items: item
    });

    let form = document.getElementsByClassName("block-form");
    let text = document.getElementsByClassName("block-text");
    let element = document.getElementsByClassName("form_open");
    
    function openForm(){
        form[0].style.display = 'block';
        text[0].style.display = 'none';
    }
    element[0].addEventListener("click", openForm);
        
    let returnLink = document.getElementsByClassName("returnLink");
    function closeForm(){
        form[0].style.display = 'none';
        text[0].style.display = 'block';
    }
    returnLink[0].addEventListener("click", closeForm);


    let openLog = document.getElementsByClassName("openLogin");
    let formLog = document.getElementsByClassName("form-log-wrap");
    let blackout = document.getElementsByClassName("blackout");
    function openFormLog(){
        formLog[0].style.display = 'block';
        blackout[0].style.display = 'block';
    }
    openLog[0].addEventListener("click", openFormLog);

});
