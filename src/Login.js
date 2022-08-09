import {GoogleLogin} from 'react-google-login';
import { GoogleOAuthProvider } from '@react-oauth/google';


const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
console.log(clientId)
function Login (){
    const onSuccess = (response) => {console.log('[Login Success] current user:', response.profileObj);}
    const onFailure = (response) => {console.log('[Login Success] current user:', response);}


return(
    <div>
        <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
        />
    </div>
)
}
export default Login;