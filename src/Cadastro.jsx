import React from "react";
import "./App.css";
import { Link } from "react-router";

function Cadastro() {
  return (
    <>
      <div>
    
    <div className="box">
      <h1>CADASTRO</h1>

      <form>
        <label>Nome:</label>
        <input type="text" />

        <label>E-mail:</label>
        <input type="email" />

        <label>CPF:</label>
        <input type="text" />

        <div className="linha div">
          <div>
            <label>Usuário:</label>
            <input type="text" />
          </div>
          <div>
            <label>Senha:</label>
            <input type="password" />
          </div>
        </div>

        <button type="button">CADASTRAR</button>
      </form>

      <p className="social-title">Logar com</p>
      <div className="social-icons">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" alt="Apple" />
      </div>
      <p className="trocar">
        Já tem conta?{" "}
        <Link to="/">Logar</Link>
      </p>
    </div>
      </div>
    </>
  );
}

export default Cadastro;
