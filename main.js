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
    if(element.length > 0){
        element[0].addEventListener("click", openForm);
    }    
        
    let returnLink = document.getElementsByClassName("returnLink");
    function closeForm(){
        form[0].style.display = 'none';
        text[0].style.display = 'block';
    }
    if(element.length > 0){
    returnLink[0].addEventListener("click", closeForm);
    }

    let openLog = document.getElementsByClassName("openLogin");
    let formLog = document.getElementsByClassName("form-log-wrap");
    let blackout = document.getElementsByClassName("blackout");
    function openFormLog(){
        formLog[0].style.display = 'block';
        blackout[0].style.display = 'block';
    }
    openLog[0].addEventListener("click", openFormLog);

    let mobileNav = document.getElementsByClassName("mobile-nav");
    let desctopNav = document.getElementsByClassName("desctop-nav");
        function openNav(){
            desctopNav[0].style.display = 'block';
            blackout[0].style.display = 'block';
        }
    mobileNav[0].addEventListener("click", openNav);

    let likeBtm = document.getElementsByClassName("user-review_block_like");
    function likeAdd(element){
        let total = element.lastElementChild.innerHTML;
        let newTotal = Number(total) + 1;
        element.lastElementChild.innerHTML = newTotal;
    }
    let newLikeBtn = Object.values(likeBtm);

    newLikeBtn.forEach(element => {
       element.addEventListener("click", () => likeAdd(element));
    });
    
    

    

});
