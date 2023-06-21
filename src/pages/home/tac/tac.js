import { NavBar, Footer } from '../../components';
import UnderDev from '../under-dev/under-dev';

const Tac = {
    view:() =>{
        return [
            m(NavBar,{
                nav:"nav-small", 
                title: "Terms & Conditions"
            }),
            m(UnderDev),
            m(Footer)
        ]
    }
}

export default Tac;