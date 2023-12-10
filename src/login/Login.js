import React, { useState } from 'react';
import RouteLogin from './RouteLogin';
import { useSelector } from 'react-redux';
const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const Persone=useSelector(state=>state.Persone);
  const [Profil,setprofil]=useState()

  const handleSubmit = (e) => {
    e.preventDefault();

    Persone.map((Item)=>{
      if (email === Item.Email && password === Item.psword) {
        // Si les identifiants sont corrects, appeler la fonction onLogin
        setprofil(Item);
        onLogin();
      } else {
        // Gérer les erreurs d'authentification
        alert('Identifiants incorrects');
      }
    })
 
  };

  return (
    <center>
<RouteLogin/>
     
     <div class="form__group field">
     <form action="" onSubmit={handleSubmit}>
       <h2>Autenfication</h2><br />
   <input type="input" value={email} onChange={handleEmailChange} class="form__field" placeholder="Name" name="name" id='name' required />
   
  <input type="password"  value={password}  onChange={handlePasswordChange} class="form__field" placeholder='Password' />
  <input type="submit" on class="btn"  style={{background:"#004930 ",width:"100%",padding:"3%",marginTop: "10%",color:"white"}} value="Connecter" />
  <span>Mot de passe oublié?</span>
  </form>
 </div></center>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Mettez à jour l'état global de connexion
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Mettez à jour l'état global de connexion
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Bienvenue! Mosieur Zayla Vous avez Conecte    Mohal3a </p>
          <button onClick={handleLogout}>Déconnexion</button>
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;