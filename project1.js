function goToWebsite(){


    const project = document.querySelector('.live-page');
    const github = document.querySelector('.git-page');

    project.addEventListener('click', function(){
    window.open('https://boopies.github.io/hp-Quiz-final/', '_blank')});

    github.addEventListener('click', function(){
        window.open('https://github.com/boopies/HP_Spell_Quizz', '_blank')});
}

goToWebsite();