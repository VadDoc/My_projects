window.addEventListener('load', init);

function init() {
    let numberBefore = document.querySelector('#number-before'),
    numberAfter = document.querySelector('#number-after'),
    dimBefore = document.querySelector('#dim-before'),
    dimAfter = document.querySelector('#dim-after');

    numberBefore.addEventListener('change', function() {
        if (dimBefore.value == 'mSquare') {
            if (dimAfter.value == 'mSquare') {
                numberAfter.value = numberBefore.value;
            } else if (dimAfter.value == 'sotka') {
                numberAfter.value = numberBefore.value / 100;
            } else if (dimAfter.value == 'hectar') {
                numberAfter.value = numberBefore.value / 10000;
            }
        } else if (dimBefore.value == 'sotka') {
            if (dimAfter.value == 'mSquare') {
                numberAfter.value = numberBefore.value * 100;
            } else if (dimAfter.value == 'sotka') {
                numberAfter.value = numberBefore.value;
            } else if (dimAfter.value == 'hectar') {
                numberAfter.value = numberBefore.value / 100;
            }
        } else if (dimBefore.value == 'hectar') {
            if (dimAfter.value == 'mSquare') {
                numberAfter.value = numberBefore.value * 10000;
            } else if (dimAfter.value == 'sotka') {
                numberAfter.value = numberBefore.value * 100;
            } else if (dimAfter.value == 'hectar') {
                numberAfter.value = numberBefore.value;
            }
        }
    })

    numberAfter.addEventListener('change', function() {
        if (dimBefore.value == 'mSquare') {
            if (dimAfter.value == 'mSquare') {
                numberBefore.value = numberAfter.value;
            } else if (dimAfter.value == 'sotka') {
                numberBefore.value = numberAfter.value * 100;
            } else if (dimAfter.value == 'hectar') {
                numberBefore.value = numberAfter.value * 10000;
            }
        } else if (dimBefore.value == 'sotka') {
            if (dimAfter.value == 'mSquare') {
                numberBefore.value = numberAfter.value / 100;
            } else if (dimAfter.value == 'sotka') {
                numberBefore.value = numberAfter.value;
            } else if (dimAfter.value == 'hectar') {
                numberBefore.value = numberAfter.value * 100;
            }
        } else if (dimBefore.value == 'hectar') {
            if (dimAfter.value == 'mSquare') {
                numberBefore.value = numberAfter.value / 10000;
            } else if (dimAfter.value == 'sotka') {
                numberBefore.value = numberAfter.value / 100;
            } else if (dimAfter.value == 'hectar') {
                numberBefore.value = numberAfter.value;
            }
        }
    })

    dimBefore.addEventListener('change', function() {
        if (dimBefore.value == 'mSquare') {
            if (dimAfter.value == 'mSquare') {
                numberAfter.value = numberBefore.value;
            } else if (dimAfter.value == 'sotka') {
                numberAfter.value = numberBefore.value / 100;
            } else if (dimAfter.value == 'hectar') {
                numberAfter.value = numberBefore.value / 10000;
            }
        } else if (dimBefore.value == 'sotka') {
            if (dimAfter.value == 'mSquare') {
                numberAfter.value = numberBefore.value * 100;
            } else if (dimAfter.value == 'sotka') {
                numberAfter.value = numberBefore.value;
            } else if (dimAfter.value == 'hectar') {
                numberAfter.value = numberBefore.value / 100;
            }
        } else if (dimBefore.value == 'hectar') {
            if (dimAfter.value == 'mSquare') {
                numberAfter.value = numberBefore.value * 10000;
            } else if (dimAfter.value == 'sotka') {
                numberAfter.value = numberBefore.value * 100;
            } else if (dimAfter.value == 'hectar') {
                numberAfter.value = numberBefore.value;
            }
        }
    })

    dimAfter.addEventListener('change', function() {
        if (dimBefore.value == 'mSquare') {
            if (dimAfter.value == 'mSquare') {
                numberAfter.value = numberBefore.value;
            } else if (dimAfter.value == 'sotka') {
                numberAfter.value = numberBefore.value / 100;
            } else if (dimAfter.value == 'hectar') {
                numberAfter.value = numberBefore.value / 10000;
            }
        } else if (dimBefore.value == 'sotka') {
            if (dimAfter.value == 'mSquare') {
                numberAfter.value = numberBefore.value * 100;
            } else if (dimAfter.value == 'sotka') {
                numberAfter.value = numberBefore.value;
            } else if (dimAfter.value == 'hectar') {
                numberAfter.value = numberBefore.value / 100;
            }
        } else if (dimBefore.value == 'hectar') {
            if (dimAfter.value == 'mSquare') {
                numberAfter.value = numberBefore.value * 10000;
            } else if (dimAfter.value == 'sotka') {
                numberAfter.value = numberBefore.value * 100;
            } else if (dimAfter.value == 'hectar') {
                numberAfter.value = numberBefore.value;
            }
        }
    })
}