const home = () => {
    const dynamicDiv = document.querySelector('div#dynamicDiv');
    
    while (dynamicDiv.firstChild) {
        dynamicDiv.removeChild(dynamicDiv.lastChild)
    }
    
    const h1 = document.createElement('h1');
    h1.textContent = 'Discover Taste';

    const p = document.createElement('p');
    p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo odio excepturi ut ipsam accusamus cum.';
    
    const orderBtn = document.createElement('button');
    orderBtn.textContent = 'Order Now';
    orderBtn.disabled = true;
    orderBtn.className = 'orderBtn';

    dynamicDiv.appendChild(h1);
    dynamicDiv.appendChild(p);
    dynamicDiv.appendChild(orderBtn);
}

export { home }