import "../styles/facebook-login.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";

const FacebookLogin = ({ onLogin }) => {
  return (
    <div>
      <LoginSocialFacebook
        className="fb-btn"
        isOnlyGetToken
        appId="957843395239636"
        onResolve={({ data }) => {
          onLogin(data);
        }}
        onReject={(err) => {
          // eslint-disable-next-line no-console
          console.log(err);
        }}
      >
        <FacebookLoginButton />
      </LoginSocialFacebook>
    </div>
  );
};

export default FacebookLogin;
