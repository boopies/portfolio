
//for the navigation menu
function navEnter(){

    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', function(){
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    }); 
};

//for the email me button
function mailMe(){

    const mailME = document.querySelector('.mail-me')

    mailME.addEventListener('click', function() {
    location.href = "mailto:mulia.teguh.nguyen@gmail.com";
    });
}

function gotoProject(){

    const project1 = document.querySelector('.learnmore1')

    project1.addEventListener('click', function() {
    location.href = "project1.html";
    });

    const project2 = document.querySelector('.learnmore2')

    project2.addEventListener('click', function() {
    location.href = "project2.html";
    });
}

mailMe();
navEnter();
gotoProject();