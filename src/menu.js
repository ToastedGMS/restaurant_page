const menu = () => {
    const dynamicDiv = document.querySelector('div#dynamicDiv');

    while (dynamicDiv.firstChild) {
        dynamicDiv.removeChild(dynamicDiv.lastChild)
    }

    const firstH2 = document.createElement('h2');
    firstH2.textContent = 'Option 1';

    const firstP = document.createElement('p');
    firstP.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia similique quas impedit, in atque nisi. Atque necessitatibus reprehenderit accusantium, quis vel ab voluptatibus rerum maiores, vitae quae totam!';

    const secondH2 = document.createElement('h2');
    secondH2.textContent = 'Option 2';

    const secondP = document.createElement('p');
    secondP.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia similique quas impedit, in atque nisi. Atque necessitatibus reprehenderit accusantium, quis vel ab voluptatibus rerum maiores, vitae quae totam!';

    const thirdH2 = document.createElement('h2');
    thirdH2.textContent = 'Option 3';

    const thirdP = document.createElement('p');
    thirdP.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia similique quas impedit, in atque nisi. Atque necessitatibus reprehenderit accusantium, quis vel ab voluptatibus rerum maiores, vitae quae totam!';
    
    dynamicDiv.appendChild(firstH2);
    dynamicDiv.appendChild(firstP);
    dynamicDiv.appendChild(secondH2);
    dynamicDiv.appendChild(secondP);
    dynamicDiv.appendChild(thirdH2);
    dynamicDiv.appendChild(thirdP);
}

export { menu }