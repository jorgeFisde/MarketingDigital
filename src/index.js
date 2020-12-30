import './css/bootstrap.min.css';
import './style.css'

import { makeFixedNavBar } from './js/componentes';



window.addEventListener('scroll', makeFixedNavBar)