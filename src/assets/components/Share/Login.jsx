import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "./firebaseconfig";

const Login = () => {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Usuario:", result.user);
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      console.log("Usuario:", result.user);
    } catch (error) {
      console.error("Error al iniciar sesión con Facebook:", error);
    }
  };

  return (
    <div>
      <button onClick={handleGoogleLogin}>Iniciar sesión con Google</button>
      <button onClick={handleFacebookLogin}>Iniciar sesión con Facebook</button>
    </div>
  );
};

export default Login;