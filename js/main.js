window.onscroll = function() { scrollSpy() };

function scrollSpy() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("scrollbar").style.width = scrolled + "%";
}

const words = [" solve problems by writing code", " do competitive programming", " make web sites",
    " do data analysis", " build machine learning models",
];
var i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            document.getElementById('word').innerHTML += word.shift();
        } else {
            deletingEffect();
            return false;
        };
        timer = setTimeout(loopTyping, 200);
    };
    loopTyping();
};

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.getElementById('word').innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            };
            typingEffect();
            return false;
        };
        timer = setTimeout(loopDeleting, 150);
    };
    loopDeleting();
};

typingEffect();

function typeWriter(eid, txt, iterator) {
    if (iterator < txt.length) {
        document.getElementById(eid).innerHTML += txt.charAt(iterator);
        iterator++;
    } else {
        document.getElementById(eid).innerHTML = '';
        iterator = 0;
    }
    setTimeout(function() { typeWriter(eid, txt, iterator) }, 250);
}

typeWriter('achievement-cmd', 'open achievements.md', 0)
typeWriter('skill-cmd', 'skills.plot.radar()', 0)
typeWriter('certification-cmd', 'cat certifications.json', 0)
typeWriter('portfolio-cmd', 'ls -l /portfolio', 0)

function chdir(event) {
    dirs = document.getElementsByClassName('dir')
    for (d = 0; d < 7; d++) {
        dirs[d].classList.remove('pwd')
    }
    event.target.classList.add('pwd')
    target_class = event.target.getAttribute("data")
    projects = document.getElementsByClassName('project')
    for (p = 0; p < projects.length; p++)
        projects[p].style.display = 'none'

    target_projects = document.getElementsByClassName(target_class)
    for (p = 0; p < target_projects.length; p++)
        target_projects[p].style.display = 'inline-block'
}

$(document).ready(function() {
    $(".dir")[0].click()
});