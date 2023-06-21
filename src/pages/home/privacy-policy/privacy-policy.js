import { NavBar, Footer, Layout } from '../../components';

const PrivacyPolicy = {
  view:() =>{
        return [
            m(NavBar,{
              nav:"nav-small", 
              title: "Privacy Policy"
            }),
            m(Layout, 
              m("h4", [
                m("span", "Last Updated On 10-May-2023"),
                m("br"),
                m("span",  "Effective Date 09-May-2023")
              ]), 
              m("p", "This Privacy Policy describes the policies of RideRate, [address here], Ekiti [Zip here], Nigeria, email: hello@riderate.ng, phone: 08012345678 on the collection, use and disclosure of your information that we collect when you use our website ( https://johnpraise247.github.io/RideRate/ ). (the “Service”). By accessing or using the Service, you are consenting to the collection, use and disclosure of your information in accordance with this Privacy Policy. If you do not consent to the same, please do not access or use the Service. "), 
              m("p", " We may modify this Privacy Policy at any time without any prior notice to you and will post the revised Privacy Policy on the Service. The revised Policy will be effective 180 days from when the revised Policy is posted in the Service and your continued access or use of the Service after such time will constitute your acceptance of the revised Privacy Policy. We therefore recommend that you periodically review this page. "), 
              m("ol", [
                m("li", [
                   m("h2",  " Information We Collect: "),
                   m("p", " We will collect and process the following personal information about you: "),
                   m("ol", [
                    m("li", "Name"),
                    m("li", "Email"),
                    m("li", "Mobile")
                  ])
                ]),
                m("li", [
                  m("h2",  " How We Collect Your Information: "),
                  m("p",  " We collect/receive information about you in the following manner: "),
                  m("ol",[
                    m("li", "When a user fills up the registration form or otherwise submits personal information"),
                    m("li", "Interacts with the website"),
                    m("li", "From public sources")
                  ])
                ]),
      m("li",
        [
          m("h2.privacy-policy-h2", 
            " How We Use Your Information: "
          ),
          m("p.privacy-policy-p", 
            " We will use the information that we collect about you for the following purposes: "
          ),
          m("ol.privacy-policy-ol",
            [
              m("li", 
                "Creating user account"
              ),
              m("li", 
                "Customer feedback collection"
              ),
              m("li", 
                "Support"
              ),
              m("li", 
                "Administration info"
              ),
              m("li", 
                "User to user comments"
              ),
              m("li", 
                "Manage user account"
              )
            ]
          ),
          m("p.privacy-policy-p", 
            " If we want to use your information for any other purpose, we will ask you for consent and will use your information only on receiving your consent and then, only for the purpose(s) for which grant consent unless we are required to do otherwise by law. "
          )
        ]
      ),
      m("li",
        [
          m("h2.privacy-policy-h2", 
            " How We Share Your Information: "
          ),
          m("p.privacy-policy-p", 
            " We will not transfer your personal information to any third party without seeking your consent, except in limited circumstances as described below: "
          ),
          m("ol.privacy-policy-ol", 
            m("li", 
              "Analytics"
            )
          ),
          m("p.privacy-policy-p", 
            " We require such third party’s to use the personal information we transfer to them only for the purpose for which it was transferred and not to retain it for longer than is required for fulfilling the said purpose. "
          ),
          m("p.privacy-policy-p", 
            " We may also disclose your personal information for the following: (1) to comply with applicable law, regulation, court order or other legal process; (2) to enforce your agreements with us, including this Privacy Policy; or (3) to respond to claims that your use of the Service violates any third-party rights. If the Service or our company is merged or acquired with another company, your information will be one of the assets that is transferred to the new owner. "
          )
        ]
      ),
      m("li",
        [
          m("h2.privacy-policy-h2", 
            " Retention Of Your Information: "
          ),
          m("p.privacy-policy-p", 
            " We will retain your personal information with us for 90 days to 2 years after user accounts remain idle or for as long as we need it to fulfill the purposes for which it was collected as detailed in this Privacy Policy. We may need to retain certain information for longer periods such as record-keeping / reporting in accordance with applicable law or for other legitimate reasons like enforcement of legal rights, fraud prevention, etc. Residual anonymous information and aggregate information, neither of which identifies you (directly or indirectly), may be stored indefinitely. "
          )
        ]
      ),
      m("li",
        [
          m("h2.privacy-policy-h2", 
            " Your Rights: "
          ),
          m("p.privacy-policy-p", 
            " Depending on the law that applies, you may have a right to access and rectify or erase your personal data or receive a copy of your personal data, restrict or object to the active processing of your data, ask us to share (port) your personal information to another entity, withdraw any consent you provided to us to process your data, a right to lodge a complaint with a statutory authority and such other rights as may be relevant under applicable laws. To exercise these rights, you can write to us at hello@riderate.ng. We will respond to your request in accordance with applicable law. "
          ),
          m("p.privacy-policy-p", 
            " You may opt-out of direct marketing communications or the profiling we carry out for marketing purposes by writing to us at hello@riderate.ng. "
          ),
          m("p.privacy-policy-p", 
            " Do note that if you do not allow us to collect or process the required personal information or withdraw the consent to process the same for the required purposes, you may not be able to access or use the services for which your information was sought. "
          )
        ]
      ),
      m("li",
        [
          m("h2.privacy-policy-h2", 
            " Cookies Etc. "
          ),
          m("p.privacy-policy-p",
            [
              " To learn more about how we use these and your choices in relation to these tracking technologies, please refer to our ",
              m("a[href='#/cookie-policy']", 
                "Cookie Policy."
              )
            ]
          )
        ]
      ),
      m("li",
        [
          m("h2.privacy-policy-h2", 
            " Security: "
          ),
          m("p.privacy-policy-p", 
            " The security of your information is important to us and we will use reasonable security measures to prevent the loss, misuse or unauthorized alteration of your information under our control. However, given the inherent risks, we cannot guarantee absolute security and consequently, we cannot ensure or warrant the security of any information you transmit to us and you do so at your own risk. "
          )
        ]
      ),
      m("li",
        [
          m("h2.privacy-policy-h2", 
            " Third Party Links & Use Of Your Information: "
          ),
          m("p.privacy-policy-p", 
            " Our Service may contain links to other websites that are not operated by us. This Privacy Policy does not address the privacy policy and other practices of any third parties, including any third party operating any website or service that may be accessible via a link on the Service. We strongly advise you to review the privacy policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services. "
          )
        ]
      ),
      m("li",
        [
          m("h2.privacy-policy-h2", 
            " Grievance / Data Protection Officer: "
          ),
          m("p.privacy-policy-p", 
            " If you have any queries or concerns about the processing of your information that is available with us, you may email our Grievance Officer at RideRate, hello@riderate.ng, email: hello@riderate.ng. We will address your concerns in accordance with applicable law. "
          )
        ]
      )
    ])
   ),
  
  // m("p.privacy-policy-p",
  //   [
  //     " Privacy Policy generated with ",
  //     m("a[target='_blank'][href='https://www.cookieyes.com/?utm_source=PP&utm_medium=footer&utm_campaign=UW']", 
  //       "CookieYes"
  //     ),
  //     ". "
  //   ]
  // )
              
            
            m(Footer)
        ]
    }
}

export default PrivacyPolicy;