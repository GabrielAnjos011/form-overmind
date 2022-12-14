import React, { useState } from "react";
import { toast } from 'react-toastify';
import { mask } from 'remask'
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
    const request = await fetch(process.env.REACT_APP_HOST, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formValues
      })
    })
    
    if (request.ok) {
      toast.success("Cadastro realizado com sucesso");
      setFormValues({
        name: "",
        email: "",
        telephone: "",
        password: "",
        passwordConfirm: "",
      });
    }
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
        <h2 className="form_title">Cadastra-se</h2>
        <p className="section">Preencha com os seus dados</p>
        <Input
          type="text"
          title="Insira o nome completo"
          label="Nome completo"
          name="name"
          placeholder="Insira o nome completo"
          value={formValues.name}
          onChange={setFormValues}
        />
        <Input
          title="Insira o email"
          type="email"
          label="Email"
          name="email"
          placeholder="Insira o email"
          value={formValues.email}
          onChange={setFormValues}
        />
        <Input
          title="Número de telefone precisa ser no formato (99) 99999-9999"
          type="tel"
          label="Telefone"
          name="telephone"
          placeholder="(99) 99999-9999"
          value={mask(formValues.telephone, ['(99) 99999-9999'])}
          onChange={setFormValues}
        />
        <Input
          title="Insira a senha"
          type="password"
          label="Senha"
          name="password"
          placeholder="Insira a senha"
          value={formValues.password}
          onChange={setFormValues}
        />
        <Input
          title="Confirme a senha"
          type="password"
          label="Confirme a senha"
          name="passwordConfirm"
          placeholder="Confirme a senha"
          value={formValues.passwordConfirm}
          onChange={setFormValues}
        />
        <div className="containerSubmit">
          <button 
            title="Pressione para cadastrar"
            type="submit" 
            className="submitBtn"
            disabled={formValues.name.length <= 0  || formValues.email.length <= 0 || formValues.telephone.length <= 0 || formValues.password.length <= 0 || formValues.passwordConfirm.length <= 0}
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Home;
