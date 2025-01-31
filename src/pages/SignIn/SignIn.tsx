import { useState } from "react";
import { useNavigate } from "react-router";
import { Auth } from "../../api/auth";
import { useAuth } from "../../hooks";
// import { User } from "../../api/user";

import "./SignIn.scss";

export function SignIn() {
  const { login } = useAuth();

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  const authController = new Auth();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response: iResponse = await fetchSignIn();

    if (!response.status) return alert(response.msg);

    authController.setAccessToken(response.msg.access);
    authController.setRefreshToken(response.msg.refresh);

    // setLoading(false);
    login(response.msg.access);

    alert("Seccion iniciada.");
    navigate('/user/home');
  }

  const fetchSignIn = async () => {
    const response = await authController.postSignIn(formData);
    
    return response;
  }
  
  return (
    <div onSubmit={handleSubmit} className="father-signin">
      <form onSubmit={handleSubmit} className="father-signin">
        <h3 style={{width: "100%", textAlign: "center"}}>SignIn</h3>
        <input className="inputstyle" type="email" name="email" id="email" onChange={handleChange} autoFocus/>
        <input className="inputstyle" type="password" name="password" id="password" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

interface iResponse {
  msg: string,
  status: boolean,
}
