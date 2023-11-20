'use strict';

import noUiSlider from 'nouislider';

function createRangeInput(min, max, minOutput, maxOutput) {
    const rangeInput = document.querySelector('.range-slider');
    const rangeMinOutput = document.querySelector(minOutput);
    const rangeMaxOutput = document.querySelector(maxOutput);
    const outputArr = [rangeMinOutput, rangeMaxOutput];

    if (rangeInput) {
        noUiSlider.create(rangeInput, {
            start: [min, max],
            connect: true,
            range: {
                'min': min,
                'max': max
            }
        });

        rangeInput.noUiSlider.on('update', function (values, handle) {

            let value = values[handle];

            outputArr[handle].value = `${Math.round(value)}$`;
        })
    }

}

export default createRangeInput;