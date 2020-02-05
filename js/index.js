const acc = document.getElementsByClassName("accord");
const tabsLinks = document.getElementsByClassName('tabsLinks');
let i;
let clicked = false;

function slideUp(target){
    target.style.display = 'none';
    target.classList.remove("fadeIn");
    target.classList.add("fadeOut");
}

function slideDown(target){
    target.style.removeProperty('display');
    let display = 'block';
    target.style.display = display;
    target.classList.add("fadeIn");
    target.classList.remove("fadeOut");
}

  function displayTabs (tabsLinks, e){
    for (let i = 0; i < tabsLinks.length; i++) {
        tabsLinks[i].removeAttribute('style');
        tabsLinks[i].setAttribute('class', 'tabsLinks');
    }
    document.addEventListener('mousemove', evt => {
        var y = evt.clientY / innerHeight;
        document.documentElement.style.setProperty('--mouse-y', y - 10);
    });
    let topOffset = e.target.offsetTop - 50 < 0 ? 0 : e.target.offsetTop - 5 ;
    e.target.setAttribute('class', 'tabsLinks background');
    e.target.setAttribute('data-before', topOffset+'px');
    let tabName = e.target.getAttribute('value');
    let tabcontent;
    tabcontent = document.getElementsByClassName("contents");
    for(let i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display="none";
    }
    for(let i = 0; i < tabsLinks.length; i++) {
        tabsLinks[i].className = tabsLinks[i].className.replace(" active", "");
    }
    if(document.getElementById(`${tabName}`)){
        document.getElementById(`${tabName}`).style.display = "flex";
        document.getElementById(`${tabName}`).style.marginBottom = "6%";
    } else {
        document.getElementById("empty").setAttribute("style", "display : flex; flex: 10");
    }
}

function displayPanel(j){
    acc[j].childNodes[1].childNodes[3].classList.add('h5Style');
    acc[j].childNodes[1].childNodes[1].classList.remove('OutwidthImg');
    acc[j].childNodes[1].childNodes[3].classList.remove('Outh5Style');
    acc[j].childNodes[1].childNodes[1].classList.add('animwidthImg');
    acc[j].classList.add('animateAccordDisplay');
    acc[j].childNodes[3].style.opacity = '0';
    acc[j].style.background = 'none';
}

function WidthChange (mq){
    for (let i = 0; i < acc.length; i++) {
        document.getElementById("tab1").style.display = "flex";
        if (mq.matches) {
            acc[i].nextElementSibling.style.display = 'none';
            acc[i].addEventListener("click", function() {
                tabsLinks[0].click();
                const panel = this.nextElementSibling;
                for (let j = 0; j < acc.length; j++) {
                    const panel = acc[j].nextElementSibling;
                    panel.style.display = "none";
                    if(panel.childNodes[3]){
                        panel.childNodes[3].childNodes[1].childNodes[1].classList.remove('background');
                    }
                    if (panel.style.maxHeight) {
                        panel.style.maxHeight = null;
                    }
                }
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.display = "block"
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        } else {
            const panel = acc[i].nextElementSibling;
            panel.style.display = "none"
            acc[2].childNodes[1].childNodes[1].style.width = "28px";
            acc[i].classList.remove('animateAccordDisplay');
            acc[i].classList.remove('animateAccordHide');
            setTimeout(function(){
                acc[i].childNodes[1].childNodes[3].classList.add('displayOuth5Style');
            }, 30);
            acc[i].addEventListener("click", function(e) {
                clicked = false;
                tabsLinks[0].click();
                const panel = this.nextElementSibling;
                e.target.setAttribute('style', 'color: #fff');
                for (let j = 0; j < acc.length; j++) {
                    acc[j].childNodes[1].style.transition = "all 0.6s ease";
                    if(!clicked) {
                        displayPanel(j);
                    } else {
                        acc[j].childNodes[1].childNodes[3].style.display = "flex";
                        acc[j].childNodes[3].style.opacity = '0';
                        acc[j].childNodes[1].childNodes[3].classList.add('h5Style');
                        acc[i].childNodes[1].childNodes[3].classList.remove('displayOuth5Style');
                        acc[j].childNodes[1].style.paddingTop = "41px"
                        acc[j].childNodes[1].childNodes[3].classList.remove('Outh5Style');
                    }
                    acc[j].childNodes[1].classList.add('disaleHover');
                    const panel = acc[j].nextElementSibling;
                    if(j === 2) {
                        acc[j].childNodes[1].childNodes[1].style.transition = "width 0.1s ease";
                        acc[j].childNodes[1].childNodes[1].style.width = "20px";
                    }
                    slideUp(panel);
                    if (panel.style.maxHeight) {
                        panel.style.maxHeight = null;
                    }
                }
                if (panel.style.maxHeight) {
                    panel.style.display = "none"
                    panel.style.maxHeight = null;
                } else {
                    slideDown(panel);
                    panel.style.maxHeight = "385px";
                    panel.style.position = "absolute";
                }
                mh = window.matchMedia("(max-width: 1800px) || (max-width: 1192px)");
                mh.addListener(widthMh);
                function widthMh(mh) {
                    if(mh.matches) {
                        for (let j = 0; j < acc.length; j++) {
                            acc[j].style.marginTop = '20%';
                        }
                    }
                }
                mh = window.matchMedia("(max-width: 1500px)");
                mh.addListener(widthfIVE);
                function widthfIVE(mh) {
                    if(mh.matches) {
                        for (let j = 0; j < acc.length; j++) {
                            acc[j].style.marginTop = '20%';
                        }
                    }
                }
                mh = window.matchMedia("(max-width: 1300px)");
                mh.addListener(widthMFOUR);
                function widthMFOUR(mh) {
                    if(mh.matches) {
                        for (let j = 0; j < acc.length; j++) {
                            acc[j].style.marginTop = '-1%';
                        }
                    }
                }
                mh = window.matchMedia("(max-width: 1410px)");
                mh.addListener(widthMFOUR);
                function widthMFOUR(mh) {
                    if(mh.matches) {
                        for (let j = 0; j < acc.length; j++) {
                            acc[j].style.marginTop = '0%';
                        }
                    }
                }
            })
        }
    }
    document.getElementsByClassName('close')[0].addEventListener("click", function(){
        clicked = false;
        for (let i = 0; i < acc.length; i++) {
            acc[i].childNodes[1].childNodes[3].classList.add('Outh5Style');
            acc[i].classList.remove('animateAccordDisplay');
            acc[i].childNodes[1].childNodes[3].style.transform="translateY(35px)";
            acc[i].nextElementSibling.classList.remove('fadeIn');
            acc[i].childNodes[1].childNodes[1].removeAttribute('style');
            acc[i].childNodes[3].removeAttribute('style');
            acc[i].removeAttribute('style');
            acc[i].childNodes[1].childNodes[3].classList.remove('h5Style');
            acc[i].classList.remove('disaleHover');
            acc[i].childNodes[1].classList.remove('disaleHover');
            acc[i].childNodes[1].removeAttribute('style');
            acc[i].childNodes[1].childNodes[1].removeAttribute('class');
            acc[i].childNodes[1].childNodes[1].classList.add('OutwidthImg');
            acc[i].nextElementSibling.removeAttribute('style');
            acc[i].nextElementSibling.setAttribute('style', 'display: none');
            acc[i].childNodes[1].childNodes[3].classList.remove('displayOuth5Style');
            setTimeout(function(){
                acc[i].childNodes[1].childNodes[3].classList.add('displayOuth5Style');
            }, 310);
        }
    });
    for (let i = 0; i < tabsLinks.length; i++) {
        tabsLinks[i].addEventListener('click', function(e){
            for (let i = 0; i < acc.length; i++) {
                acc[i].nextElementSibling.classList.remove('fadeOut');
                // acc[i].classList.remove('background');
                if(acc[i].nextElementSibling.childNodes[3]){
                    acc[i].nextElementSibling.childNodes[3].childNodes[1].childNodes[1].classList.remove('background');
                }
            }
            displayTabs(tabsLinks, e);
        })
    }
}

const mq = window.matchMedia("(max-width: 1199px)");
mq.addListener(WidthChange);
WidthChange(mq);