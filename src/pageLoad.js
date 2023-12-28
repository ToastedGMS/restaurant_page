const pageLoad = () => {
    const contentDiv = document.querySelector('div#content');

    const dynamicDiv = document.createElement('div');
    dynamicDiv.setAttribute('id', 'dynamicDiv')

    contentDiv.appendChild(dynamicDiv);
}

export { pageLoad }