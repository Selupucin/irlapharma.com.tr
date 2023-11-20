'use strict';

function drawTabs() {
    const triggerTabList = document.querySelectorAll('[role="tablist"] .nav-link');
    const tabPanes = document.querySelectorAll('.tab-content .tab-pane');

    triggerTabList.forEach((triggerEl, i) => {
        if (i === 0) {
            triggerTabList[i].click();
            tabPanes[i].classList.add('show', 'active');
        }

        triggerEl.addEventListener('click', e => {
            e.preventDefault()
            for (let i = 0; i < triggerTabList.length; i++) {
                triggerTabList[i].classList.remove('active');
                tabPanes[i].classList.remove('show', 'active');
            }
            triggerEl.classList.add('active');
            tabPanes[i].classList.add('show', 'active');
        })
    })
}

export default drawTabs;