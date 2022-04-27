// Vars Helper
const blodText = document.getElementById('blodText');
const ItalicText = document.getElementById('ItalicText');
const colorText = document.getElementById('colorText');
const textArea = document.getElementById('textArea');
const sizeText = document.getElementById('sizeText');
const resetProp = document.getElementById('resetProp');
const LeftText = document.getElementById('LeftText');
const CenterText = document.getElementById('CenterText');
const RightText = document.getElementById('RightText');

// TextArea
(function () {
    const funTextArea = (function () {
        function funBoldText(ele) {
            if (ele.style.fontWeight !== 'bold') {
                ele.style.fontWeight = 'bold';
            } else {
                ele.style.fontWeight = '';
            }
        }

        function funItalicText(ele) {
            if (ele.style.fontStyle !== 'italic') {
                ele.style.fontStyle = 'italic';
            } else {
                ele.style.fontStyle = '';
            }
        }

        function funLeftText(ele) {
            ele.style.textAlign = 'left';
        }

        function funCenterText(ele) {
            ele.style.textAlign = 'center';
        }

        function funRightText(ele) {
            ele.style.textAlign = 'right';
        }

        function funColorText(ele, e) {
            if (ele.style.color !== e.currentTarget.value) {
                ele.style.color = e.currentTarget.value;
            } else {
                ele.style.color = '#000';
            }
        }

        function funSizeText(ele, e) {
            if (ele.style.fontSize !== e.currentTarget.value + 'px') {
                ele.style.fontSize = e.currentTarget.value + 'px';
            } else {
                ele.style.fontSize = '16px';
            }
        }

        function funRestText(ele) {
            ele.setAttribute('style', null);
        }

        return {
            funColorText,
            funBoldText,
            funItalicText,
            funRestText,
            funSizeText,
            funLeftText,
            funRightText,
            funCenterText,
        };
    })();

    if (!window.funTextArea) {
        window.funTextArea = funTextArea;
    }
})();

// Functions
blodText.addEventListener('click', () => {
    funTextArea.funBoldText(textArea);
});

ItalicText.addEventListener('click', () => {
    funTextArea.funItalicText(textArea);
});

LeftText.addEventListener('click', () => {
    funTextArea.funLeftText(textArea);
});

CenterText.addEventListener('click', () => {
    funTextArea.funCenterText(textArea);
});

RightText.addEventListener('click', () => {
    funTextArea.funRightText(textArea);
});

colorText.addEventListener('input', (e) => {
    funTextArea.funColorText(textArea, e);
});

sizeText.addEventListener('change', (e) => {
    funTextArea.funSizeText(textArea, e);
});

resetProp.addEventListener('click', () => {
    funTextArea.funRestText(textArea);
});

// const colorText = document.getElementById('colorText');
// const blodText = document.getElementById('blodText');
// const ItalicText = document.getElementById('ItalicText');
// const resetProp = document.getElementById('resetProp');
// const textArea = document.getElementById('textArea');

// colorText.addEventListener('input', (e) => {
//     textArea.style.color = e.currentTarget.value;
// });

// blodText.addEventListener('click', () => {
//     textArea.style.fontWeight = 'bold';
// });

// ItalicText.addEventListener('click', () => {
//     textArea.style.fontStyle = 'italic';
// });

// resetProp.addEventListener('click', () => {
//     // textArea.style.all = 'unset';
// });

// sizeText.addEventListener('change', (e) => {
//     textArea.style.fontSize = e.currentTarget.value + 'px';
// });
