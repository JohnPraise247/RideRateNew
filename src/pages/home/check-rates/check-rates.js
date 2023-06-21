import { NavBar, Footer, Cookie } from '../../components';
import CheckRatesMain from './main';

const CheckRates = {
    view:() =>{
        return [
            m(NavBar,{
                nav:"nav-small", 
                title: "Check Rates", 
                sub: "Get latest Price Updates for Your Favorite Transportation with RideRate"
            }),
            m(CheckRatesMain),
            m(Footer),
            m(Cookie)
        ]
    }
}

export default CheckRates;