import { GoogleLogin } from '@react-oauth/google';




function Login (){

return(
    <div>
        <GoogleLogin
            onSuccess={credentialResponse => {
            console.log('Loged in!');
                }}
        onError={() => {
            console.log('Login Failed');
                 }}/>;
                    
    </div>
)
}
export default Login;