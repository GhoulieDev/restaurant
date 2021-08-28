const displayNavBar = () => {
    const page = document.querySelector('#content');

    const navBar = document.createElement('div');
    navBar.id = 'nav-bar';

    const restaurantName = document.createElement('h1');
    restaurantName.id = 'nav-name';
    restaurantName.textContent = 'Piece-a-Pizza';

    const navLinks = document.createElement('div');
    navLinks.id = 'nav-links';
    const homeLink = document.createElement('p');
    homeLink.textContent = 'Home';
    const menuLink = document.createElement('p');
    menuLink.textContent = 'Menu';
    const contactLink = document.createElement('p');
    contactLink.textContent = 'Contact';
    
    navLinks.appendChild(homeLink);
    navLinks.appendChild(menuLink);
    navLinks.appendChild(contactLink);

    navBar.appendChild(restaurantName);
    navBar.appendChild(navLinks);
    
    page.appendChild(navBar);
}


export { displayNavBar }