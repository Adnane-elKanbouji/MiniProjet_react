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
  console.log(Persone)
    Persone.map((Item)=>{
      if (email == Item.Email && password == Item.psword) {
        // Si les identifiants sont corrects, appeler la fonction onLogin
        
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
   <br />
     
     <div class="col-10  col-xl-5">
     <form action="" onSubmit={handleSubmit}>
      <fieldset class="border p-5">
       <h2>Autenfication</h2><br />
   <input type="input" value={email} onChange={handleEmailChange} class="form__field" placeholder="Name" name="name" id='name' required />
   
  <input type="password"  value={password}  onChange={handlePasswordChange} class="form__field" placeholder='Password' />
  <input type="submit" on class="btn"  style={{background:"#004930 ",width:"100%",padding:"3%",marginTop: "10%",color:"white"}} value="Connecter" />
  <span>Mot de passe oublié?</span>
  </fieldset>
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
    <center>
    <div>
      {isLoggedIn ? (
        <div style={{fontFamily:"Poppins"}} className='col-xl-12'>
          <h2>Bienvenue ! Mosieur <span style={{color:"#ef8f00"}}><i>Adnane</i></span> </h2>
          <h3>Nom Complet : <span style={{color:"#ef8f00"}}><i>Adnane El kanbouji</i></span> </h3>
          <h4>Votre Adress :  <span style={{color:"#ef8f00"}}><i>hay lbaghdadi rue hichi06 n 13</i></span> </h4><br />
          <button className='Mbtn' onClick={handleLogout}>Déconnexion</button>
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
    </center>
  );
};

export default App;