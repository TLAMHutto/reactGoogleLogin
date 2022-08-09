import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { render } from 'react-dom'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <AlertProvider template={AlertTemplate} {...options}>
    <Login />
    </AlertProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
