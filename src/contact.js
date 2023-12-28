const contactInfo = () => {
    const dynamicDiv = document.querySelector('div#dynamicDiv');

    while (dynamicDiv.firstChild) {
        dynamicDiv.removeChild(dynamicDiv.lastChild)
    }

    const firstH2 = document.createElement('h2');
    firstH2.textContent = 'Email us via:'

    const firstP = document.createElement('p');
    firstP.textContent = 'notarealemailaddress@dontmailus.com';
    
    const secondH2 = document.createElement('h2');
    secondH2.textContent = 'Call Us (Mon-Fri 8am-5pm)';

    const secondP = document.createElement('p');
    secondP.textContent = '+12 (34) 5678-90123';

    dynamicDiv.appendChild(firstH2);
    dynamicDiv.appendChild(firstP);
    dynamicDiv.appendChild(secondH2);
    dynamicDiv.appendChild(secondP);
}

export { contactInfo }