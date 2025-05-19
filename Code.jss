// script.js

document.addEventListener('DOMContentLoaded', () => {
    const textToChange = document.getElementById('text-to-change');
    const changeTextButton = document.getElementById('change-text-button');
    const changeStyleButton = document.getElementById('change-style-button');
    const addElementButton = document.getElementById('add-element-button');
    const removeElementButton = document.getElementById('remove-element-button');
    const contentSection = document.getElementById('content');

    // 1. Change Text Content Dynamically
    changeTextButton.addEventListener('click', () => {
        textToChange.textContent = 'Text has been changed!';
    });

    // 2. Modify CSS Styles via JavaScript
    changeStyleButton.addEventListener('click', () => {
        textToChange.style.color = 'blue';
        textToChange.style.fontSize = '24px';
        textToChange.style.fontWeight = 'bold';
    });

    // 3. Add an Element When a Button is Clicked
    addElementButton.addEventListener('click', () => {
        const newParagraph = document.createElement('p');
        newParagraph.textContent = 'This is a newly added paragraph!';
        newParagraph.classList.add('added-paragraph'); // You can add a class for styling
        contentSection.appendChild(newParagraph);
    });

    // 4. Remove an Element When a Button is Clicked
    removeElementButton.addEventListener('click', () => {
       const lastParagraph = contentSection.querySelector('.added-paragraph');
        if (lastParagraph) {
            contentSection.removeChild(lastParagraph);
        }
    });
});

