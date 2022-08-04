import React, { useState } from "react";
import { toast } from 'react-toastify';
import Input from "../../components/Input";
import "./styles.css";

function Home() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    telephone: "",
    password: "",
    passwordConfirm: "",
  });

  async function handleSubmit() {
    if(formValues.password !== formValues.passwordConfirm) {
      toast.error("Senhas não conferem");
      return;
    }
    if(formValues.password.length < 6) {
      toast.error("Senha deve ter no mínimo 6 caracteres");
      return;
    }
    console.log(formValues);
  }

  return (
    <div className="container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit()
        }}
        className="form"
      >
        <h2 className="form_title">Login</h2>
        <p className="section">Dados</p>
        <Input
          label="Nome completo"
          name="name"
          value={formValues.name}
          onChange={setFormValues}
        />
        <Input
          type="email"
          label="Email"
          name="email"
          value={formValues.email}
          onChange={setFormValues}
        />
        <Input
          type="tel"
          label="Telefone"
          name="telephone"
          value={formValues.telephone}
          onChange={setFormValues}
        />
        <Input
          type="password"
          label="Senha"
          name="password"
          value={formValues.password}
          onChange={setFormValues}
        />
        <Input
          type="password"
          label="Confirme a senha"
          name="passwordConfirm"
          value={formValues.passwordConfirm}
          onChange={setFormValues}
        />
        <div className="containerSubmit">
          <button type="submit" className="submitBtn">
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Home;
