import { AuthLayout, AuthLink } from '../../../components/authlayout';
import { Button } from '../../../components/button';
import TextInput from '../../../components/input';
import Auth from '../../../app/auth';


const ForgotPwd = {
    view: () => {
        return m(AuthLayout, {
            children: [
                m(".form-group", [
                    m(TextInput, {
                        id: "emailId",
                        labelA: "Email Id",
                        type: "email",
                        value: Auth.email,
                        oninput: (e) => {
                            Auth.setEmail(e.target.value)
                        }
                    }),
                     m(AuthLink, {
                        textA: "Login",
                        textB: "Remember your password? ",
                        url: "#/login",
                        className: "text-right mt-3 mb-8"
                    }),
                    m(Button, {
                        label: "Send reset link",
                        className: ".btn-primary.font-bold.capitalize.text-white.shadow-md.mt-2.w-full"//[type='submit']
                    })
                ])
            ]
        })
    }
}

export default ForgotPwd;