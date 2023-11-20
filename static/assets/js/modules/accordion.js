'use strict';

function drawAccordion() {
    const triggers = document.querySelectorAll('.accordion_component-item_header');
    const icons = document.querySelectorAll('.accordion_component-item_header .icon');
    const panels = document.querySelectorAll('[data-scroll="true"] .collapse');

    triggers.forEach((el, i) => {
        el.addEventListener('click', e => {
            e.preventDefault();
            for (let k = 0; k < icons.length; k++) {
                icons[k].classList.remove('transform');
            }
            if (!e.target.classList.contains('collapsed')) {
                icons[i].classList.add('transform');

            } else {
                icons[i].classList.remove('transform');
            }
        })

        if (panels.length !== 0) {
            panels[i].addEventListener('shown.bs.collapse', e => {
                let height = parseFloat(window.getComputedStyle(panels[i]).height);
                if (window.pageYOffset > 500) {
                    window.scrollTo(0, window.pageYOffset - (height - 200))
                }
            })
        }

    })

}

export default drawAccordion;