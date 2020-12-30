
import '../css/componentes.css';

const navBar = document.querySelector('#nav');

export const makeFixedNavBar = () => {

    let scroll = document.documentElement.scrollTop;

    if ( scroll >= 100 ) {
        
        navBar.classList.add('fixed-top');

    }else{
        navBar.classList.remove('fixed-top');
    }

}
