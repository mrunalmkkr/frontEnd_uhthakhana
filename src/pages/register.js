import { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import { AuthContext } from "./AuthContext";

export default function Register() {
  const { register } = useContext(AuthContext);
  const [form, setForm] = useState({});

  const submit = (e) => {
    e.preventDefault();
    register(form);
  };

  return (
    <Container  style={{ marginLeft: "13%"}}>
      <form onSubmit={submit}>
        <h3>Register</h3>
        <input placeholder="Name" onChange={e=>setForm({...form,name:e.target.value})}/>
        <input type="date" />
        <input placeholder="City" />
        <input placeholder="Taluka" />
        <input placeholder="State" />
        <input placeholder="Country" />
        <input type="email" placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})}/>
        <input type="password" placeholder="Password" onChange={e=>setForm({...form,password:e.target.value})}/>
        <button>Register</button>
      </form>
    </Container>
  );
}
