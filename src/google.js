import {GoogleLogin} from 'react-google-login';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
console.log(clientId)
function Login (){
    
return(
    <div>
        <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            // onSuccess={responseGoogle}
            // onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    </div>
)
}
export default Login;