import { GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';
import React, { useState } from "react";
import { Button} from 'react-bootstrap';
import { useAlert } from 'react-alert'

function Login (){
    const alert = useAlert()
    const login = useGoogleLogin({
        onSuccess: tokenResponse => (tokenResponse.accessToken !== '') ? alert.success('Login Successful') : alert.error('Login Failed'),

      });
      
return(
    <>
    <div>
        <Button onClick={login}>
        
            Login with Google
        </Button>
           <GoogleLogin
            onSuccess={credentialResponse => {
            console.log(credentialResponse);
                }}
            onError={() => {
            console.log('Login Failed');
                 }}/>;         
    </div>
    </>
)
}
export default Login;