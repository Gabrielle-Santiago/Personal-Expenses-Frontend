import { useState } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8090/",
});

function Register() {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
    role: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      const response = await api.post("/auth/register", formData);
      console.log("Usuário registrado com sucesso:", response.data);
    } catch (error) {
      console.error("Erro ao registrar usuário:", error.response?.data || error.message);
    }
  };

  return (
    <div>
      <h2>Registrar Usuário</h2>
      <form>
        <input type="text" name="login" placeholder="Username" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <input type="text" name="role" placeholder="Admin or User" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <button type="button" onClick={handleRegister}>
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Register;