import { useState } from 'react'
import './App.css'
import apple from './assets/Apple-Logosu.png'
import facebook from './assets/Facebook-Logosu.png'
import google from './assets/Google__G__logo.svg.png'

function App() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [manterConectado, setManterConectado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Usuário: ${usuario}\nSenha: ${senha}\nManter conectado: ${manterConectado}`);
  };

  return (
    <div className="login-container">
      <h1>LOGIN</h1>

      <form onSubmit={handleSubmit}>
        <label>USUÁRIO:</label>
        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          placeholder="Digite seu usuário"
          required
        />

        <label>SENHA:</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Digite sua senha"
          required
        />

        <div className="options">
          <label className="checkbox">
            <input
              type="checkbox"
              checked={manterConectado}
              onChange={(e) => setManterConectado(e.target.checked)}
            />
            <small>Manter conectado</small>
          </label>

          <a href="#" className="forgot-link">esqueceu a senha?</a>
        </div>

        <button type="submit" className="btn-entrar">ENTRAR</button>

        <div className="social-section">
          <p><strong>LOGAR COM</strong></p>
          <div className="social-buttons">
            <img src={apple} alt="" id='apple'/>
            <img src={facebook} alt="" id='facebook'/>
            <img src={google} alt="" id='google'/>
  
          </div>
        </div>

        <p className="signup-text">
          <strong>NÃO TEM CONTA?</strong> <a href="#">Inscrever-se</a>
        </p>
      </form>
    </div>
  );
};


export default App
