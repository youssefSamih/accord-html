const acc = document.getElementsByClassName("accord");
let i;

const WidthChange = mq => {
    if (mq.matches) {
        for (i = 0; i < acc.length; i++) {
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
        }
    }
}

const mq = window.matchMedia("(max-width: 1024px)");
mq.addListener(WidthChange);
WidthChange(mq);