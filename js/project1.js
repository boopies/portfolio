function goToWebsite(){


    const project = document.querySelector('.live-page');
    const github = document.querySelector('.git-page');

    project.addEventListener('click', function(){
    window.open('https://boopies.github.io/6-degrees/', '_blank')});

    github.addEventListener('click', function(){
        window.open('https://github.com/boopies/6-degrees/', '_blank')});
}

goToWebsite();