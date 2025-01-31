import { useState } from "react";
import { useNavigate } from "react-router";
import { Auth } from "../../api/auth";

import "./SignUp.scss";

export function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const auth = new Auth();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response: iResponse = await fetchSignUp();

    if (!response.status) return alert(response.msg);

    alert("Usuario registrado.");
    navigate('/signin');
  }

  const fetchSignUp = async () => {
    const response = await auth.postSignUp(formData);
    
    return response;
  }
  
  return (
    <div onSubmit={handleSubmit} className="father-signup">
      <form onSubmit={handleSubmit} className="father-signup">
        <h3 style={{width: "100%", textAlign: "center"}}>SignUp</h3>
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