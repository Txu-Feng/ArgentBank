import Field from "../../components/Field";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSignIn } from "../../redux/slices/authSlice";

export default function SignIn() {

    // let localStorageEmail = localStorage.email ? localStorage.email : "";
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    

    const submitSignInForm = async (e) => {

      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      // const rememberMe = e.target.remembeMme.value;
      try {
        const response = await fetch("http://localhost:3001/api/v1/user/login", {
            method: "POST",
            headers: { "Content-Type": "application/json", accept: "application/json"},
            body: JSON.stringify({ email: email, password: password })
        })
        if (response.ok) {
          const data = await response.json();
          const token = data.body.token;
          dispatch(setSignIn({ token }));
          // if (rememberMe) {
          //   localStorage.setItem("email", email);
          //   localStorageEmail = email;
          // }
          navigate("/user");
        } else if (response.status === 400) {
          setError("Error in username or password");
        } else {
          setError("A problem occurred during authentication");
        }
      } catch (e) {
          console.log(e);
          setError("connection to server refused");
      }
    }

    return (
        <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle"></i>
          <h1>Sign In</h1>
          <form onSubmit={submitSignInForm}>
            <Field labelAndID='email' name='email'
              innerText='Username'/>
            <Field type='password' labelAndID='password' name='password'
              innerText='Password'/>
            <Field className='input-remember' type='checkbox' 
              labelAndID='rememberMe' name='remembeMme'
              innerText='Remember me'/>
              {error && <span className="message-error">{error}</span>}
            <button className="sign-in-button" type="submit">
              Sign In
            </button>
          </form>
        </section>
      </main>
    );
}