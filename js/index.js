const acc = document.getElementsByClassName("accord");
let i;

const WidthChange = mq => {
    for (i = 0; i < acc.length; i++) {
        if (mq.matches) {
            acc[i].addEventListener("click", function() {
                // this.classList.toggle("active");
                const panel = this.nextElementSibling;
                for (let j = 0; j < acc.length; j++) {
                    const panel = acc[j].nextElementSibling;
                    if (panel.style.maxHeight) {
                        panel.style.maxHeight = null;
                    }
                }
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        } else {
            const panel = acc[i].nextElementSibling;
            panel.style.display = "none"
            acc[i].addEventListener("click", function() {
                const panel = this.nextElementSibling;
                for (let j = 0; j < acc.length; j++) {
                    acc[j].childNodes[3].style.display = 'none';
                    acc[j].style.background = 'none';
                    acc[j].style.height = '300%';
                    acc[j].style.maxHeight = '410px';
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
                    panel.style.maxHeight = panel.scrollHeight + "px";
                    panel.style.position = "absolute";
                    panel.style.width = "40%";
                }
            })
        }
    }
}

const mq = window.matchMedia("(max-width: 1024px)");
mq.addListener(WidthChange);
WidthChange(mq);