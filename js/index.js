const acc = document.getElementsByClassName("accord");
const tabsLinks = document.getElementsByClassName('tabsLinks');
let i;
let clicked = false;

let slideUp = (target) => {
    target.style.display = 'none';
    target.classList.remove("fadeIn");
    target.classList.add("fadeOut");
}

let slideDown = (target) => {
    target.style.removeProperty('display');
    let display = 'block';
    target.style.display = display;
    target.classList.add("fadeIn");
    target.classList.remove("fadeOut");
}

document.addEventListener('animationstart', function (e) {
    if (e.animationName === 'fade-in') {
        e.target.classList.add('did-fade-in');
    }
  });
  
  document.addEventListener('animationend', function (e) {
    if (e.animationName === 'fade-out') {
        e.target.classList.remove('did-fade-in');
     }
  });

const displayTabs = (tabsLinks, e) => {
    for (let i = 0; i < tabsLinks.length; i++) {
        tabsLinks[i].removeAttribute('style');
    }
    e.target.setAttribute('style', 'background : #2e9788; color: #fff');
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

const displayPanel = j => {
    acc[j].childNodes[1].childNodes[1].classList.add('animwidthImg');
    acc[j].childNodes[1].childNodes[3].style.display = "flex";
    acc[j].classList.add('animateAccordDisplay');
    acc[j].childNodes[3].style.opacity = '0';
    acc[j].style.background = 'none';
    acc[j].childNodes[1].childNodes[1].style.marginTop = "0"
    acc[j].childNodes[1].childNodes[1].style.paddingTop = "10%"
    acc[j].childNodes[1].style.width = "121px";
    acc[j].childNodes[1].childNodes[3].style.transform="translateY(0px)";
}

const WidthChange = mq => {
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
            acc[2].childNodes[1].childNodes[1].style.width = "38px";
            acc[i].classList.remove('animateAccordDisplay');
            acc[i].classList.remove('animateAccordHide');
            acc[i].addEventListener("click", function(e) {
                clicked = false;
                tabsLinks[0].click();
                console.log(clicked);
                const panel = this.nextElementSibling;
                e.target.setAttribute('style', 'color: #fff');
                for (let j = 0; j < acc.length; j++) {
                    if(!clicked) {
                        setTimeout(() => {
                            displayPanel(j);
                        },360);
                    } else {
                        acc[j].childNodes[1].childNodes[3].style.display = "flex";
                        acc[j].childNodes[3].style.opacity = '0';
                        acc[j].childNodes[1].childNodes[3].style.transform="translateY(0px)";
                        acc[j].childNodes[1].childNodes[1].style.paddingTop = "10%"
                        acc[j].childNodes[1].style.width = "121px";
                    }
                    acc[j].classList.add('disaleHover');
                    acc[j].childNodes[1].classList.add('disaleHover');
                    // acc[j].childNodes[1].childNodes[3].style.display="none";
                    // acc[j].childNodes[1].childNodes[3].style.transform="translateY(35px)";
                    // acc[j].childNodes[1].childNodes[3].classList.add('h5Style');
                    // acc[j].style.maxHeight = '100px';
                    // acc[j].style.marginTop = '0%';
                    const panel = acc[j].nextElementSibling;
                    if(j === 2) {
                        acc[j].childNodes[1].childNodes[1].style.width = "50%";
                    }
                    slideUp(panel);
                    if (panel.style.maxHeight) {
                        panel.style.maxHeight = null;
                        // panel.style.width = "unset";
                    }
                }
                if (panel.style.maxHeight) {
                    // panel.style.width = "unset";
                    panel.style.display = "none"
                    panel.style.maxHeight = null;
                } else {
                    // panel.style.display = "block"
                    slideDown(panel);
                    panel.style.maxHeight = "365px";
                    panel.style.position = "absolute";
                    // panel.style.width = "63.7%";
                    // panel.style.marginTop = "5.1%";
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
    document.getElementsByClassName('close')[0].addEventListener("click", () => {
        clicked = true;
        for (let i = 0; i < acc.length; i++) {
            acc[i].childNodes[1].childNodes[3].classList.add('Outh5Style');
            // acc[i].classList.add('animateAccordHide');
            acc[i].nextElementSibling.classList.add('fadeOut');
            acc[i].childNodes[1].childNodes[1].classList.add('OutwidthImg');
            setTimeout(() => {
                acc[i].nextElementSibling.classList.remove('fadeIn');
                acc[i].childNodes[1].childNodes[1].removeAttribute('style');
                acc[i].childNodes[3].removeAttribute('style');
                acc[i].removeAttribute('style');
                acc[i].nextElementSibling.removeAttribute('style');
                acc[i].nextElementSibling.setAttribute('style', 'display: none');
                acc[i].childNodes[1].childNodes[3].classList.remove('h5Style');
                acc[i].classList.remove('disaleHover');
                acc[i].childNodes[1].classList.remove('disaleHover');
                acc[i].childNodes[1].removeAttribute('style');
                acc[i].classList.remove('animateAccordDisplay');
                acc[i].childNodes[1].childNodes[1].removeAttribute('class');
                acc[i].childNodes[1].childNodes[3].removeAttribute('style');
            }, 300)
        }
    });
    for (let i = 0; i < tabsLinks.length; i++) {
        tabsLinks[i].addEventListener('click', e => {
            displayTabs(tabsLinks, e);
        })
    }
}

const mq = window.matchMedia("(max-width: 1024px)");
mq.addListener(WidthChange);
WidthChange(mq);