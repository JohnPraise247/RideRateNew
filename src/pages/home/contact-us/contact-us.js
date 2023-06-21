import { NavBar, Footer, Cookie, Layout } from '../../components';

const ContactUs = {
  view:() =>{
    return [
      m(NavBar,{
        nav:"nav-small",
        title: "Contact Us"
      }),
      m(Layout, [
        // m("span.label.label-warning", "This page is under development"),
        m(".space-50"),
        m(".space-50"),
        m("p","Thank you for your interest in our website! We are always happy to hear from our audience and welcome any questions, feedback, or suggestions you may have"),
        m("br"),
        m("p","To contact us, you can email us at hello@riderate.ng. We will do our best to respond to your message within 24-48 hours."),
        m("br"),
        m("br"),
        m("p", "We look forward to hearing from you"),
       
        // m("p",[
        //   "Riderate.ng is provided by:",
        //   m("br"),
        //   ". . .",
        //   m("br"),
        //   m("br"),
        //   m("a[href='https://fuoye.edu.ng/'][target='_blank']", "Federal University Oye-Ekiti (FUOYE)"),
        //   m("br"),
        //   " Ikole Campus",
        //   m("br"),
        //   " Ekiti State",
        //   m("br"),
        //   " Nigeria",
        //   m("br"),
        //   m("br"),
        //   m("a[href='about:blank']", "info@riderate.ng"),
        //   m("br")
        // ]),
        m(".space-50"),
        m(".space-50")
      ]),
      m(Footer),
      m(Cookie)
    ]
  }
}

export default ContactUs;