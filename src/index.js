import { pageLoad } from "./pageLoad";
import { contactInfo } from "./contact";
import { menu } from "./menu";
import { home } from "./home";


pageLoad()
home()

const contentDiv = document.querySelector('div#content');

contentDiv.style.backgroundImage = 'url(https://images.unsplash.com/photo-1554998171-706e730d721d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)';
//Image by Louis Hansel via unsplash.com

const btnCtt = document.querySelector('[data-type="contactBtn"]')
btnCtt.addEventListener('click', () => { contactInfo() })

const btnMenu = document.querySelector('[data-type="menuBtn"]')
btnMenu.addEventListener('click', () => { menu() })

const btnHome = document.querySelector('[data-type="homeBtn"]')
btnHome.addEventListener('click', () => { home() })
