import { NavBar, Footer, Cookie, Layout } from '../../components';
// import UnderDev from '../under-dev/under-dev';

const About = {
    view:() =>{
        return [
            m(NavBar,{nav:"nav-small", title: "About"}),
            m(Layout, [
                m("h4", "Introduction"),
                m("p", "At RideRate, we are dedicated to providing our customers with the best possible travel     experience. We offer a variety of vehicles to choose from, including cars, vans, and buses, to accommodate     any group size or travel needs."),
                m("br"),
                m("p","RideRate provides up - to - date information on our current travel rates and availability. You can     easily search for available vehicles and book your reservation online. If you have any questions or     concerns, we offer multiple ways to get in touch with us."),
                m("br",""),
                // m("p","Thank you for choosing RideRate for your travel needs.We look forward to serving you!"),
                m("h4","Who are we?"),
                m(".space-50"),
                m("h4","What we do?"),
                m(".space-50"),
                m("h4","How to reach us"),
            ]),
            
//             To speak with a member of our team directly, you can call us at[insert phone number] during our business hours.You can also fill out our contact form on our website and we will get back to you as soon as possible.

// If you prefer real - time assistance, we offer a live chat feature on our website.Simply click the chat icon in the bottom right corner of the page to connect with a member of our team.

// We value your feedback and welcome any suggestions or comments you may have.You can share your thoughts with us through our feedback form on our website.

// Our booking process is simple and easy.First, select the type of vehicle you need and enter your travel details.Next, choose from our available vehicles and select your preferred pickup and drop - off locations.Finally, review your reservation and submit your payment information.Once your reservation is confirmed, you will receive a confirmation email with all the details of your trip.



            // m(UnderDev),
            m(Footer),
            m(Cookie)
        ]
    }
}

export default About;