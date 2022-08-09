import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <GoogleOAuthProvider clientId='1019671938210-kj3dodqde9u2str67ajqomlk3b8t6suj.apps.googleusercontent.com'>
    <Login />
    </GoogleOAuthProvider>
  );
}

export default App;
