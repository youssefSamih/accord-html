const acc = document.getElementsByClassName("accord");
const tabsLinks = document.getElementsByClassName('tabsLinks');
let i;

const WidthChange = mq => {
    for (i = 0; i < acc.length; i++) {
        document.getElementById("tab1").style.display = "flex";
        if (mq.matches) {
            acc[i].nextElementSibling.style.display = 'none';
            acc[i].addEventListener("click", function() {
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
            acc[i].addEventListener("click", function() {
                const panel = this.nextElementSibling;
                for (let j = 0; j < acc.length; j++) {
                    acc[j].childNodes[1].childNodes[3].style.display = "flex";
                    acc[j].childNodes[3].style.display = 'none';
                    acc[j].style.background = 'none';
                    // acc[j].style.height = '300%';
                    acc[j].style.maxHeight = '498px';
                    acc[j].style.marginTop = '16%';
                    if(j === 2) {
                        acc[j].childNodes[1].childNodes[1].style.width = "30px";
                    }
                    if(j === 3) {
                        acc[j].style.marginTop = '15.1%';
                    }
                    if(j === 4)  {
                        acc[j].style.marginTop = '15.7%';
                    }
                    acc[j].childNodes[1].childNodes[1].style.marginTop = "150%"
                    const panel = acc[j].nextElementSibling;
                    panel.style.display = "none"
                    if (panel.style.maxHeight) {
                        panel.style.maxHeight = null;
                        panel.style.width = "unset";
                    }
                }
                if (panel.style.maxHeight) {
                    panel.style.width = "unset";
                    panel.style.display = "none"
                    panel.style.maxHeight = null;
                } else {
                    panel.style.display = "block"
                    panel.style.maxHeight = "365px";
                    panel.style.position = "absolute";
                    panel.style.width = "42%";
                }
            })
        }
    }
    document.getElementsByClassName('close')[0].addEventListener("click", () => {
        for (i = 0; i < acc.length; i++) {
            acc[i].childNodes[1].childNodes[1].removeAttribute('style');
            acc[i].childNodes[3].removeAttribute('style');
            acc[i].removeAttribute('style');
            acc[i].nextElementSibling.removeAttribute('style');
            acc[i].nextElementSibling.setAttribute('style', 'display: none');
            console.log(acc[i].childNodes[1].childNodes[3].removeAttribute('style'));
        }
    });
    for (let i = 0; i < tabsLinks.length; i++) {
        tabsLinks[i].addEventListener('click', e => {
            for (let i = 0; i < tabsLinks.length; i++) {
                tabsLinks[i].removeAttribute('style');
            }
            e.target.setAttribute('style', 'background : #2e9788; color: #fff; width: 100%');
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
            } else {
                document.getElementById("empty").setAttribute("style", "display : flex; flex: 10");
            }
        })
    }
}

const mq = window.matchMedia("(max-width: 1024px)");
mq.addListener(WidthChange);
WidthChange(mq);