import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulation de la vérification des identifiants
    if (email === 'exemple@email.com' && password === 'motdepasse') {
      // Si les identifiants sont corrects, appeler la fonction onLogin
      onLogin();
    } else {
      // Gérer les erreurs d'authentification
      alert('Identifiants incorrects');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input type="email" value={email} onChange={handleEmailChange} required />

      <label>Mot de passe:</label>
      <input type="password" value={password} onChange={handlePasswordChange} required />

      <button type="submit">Se connecter</button>
    </form>
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
          <p>Bienvenue! Vous êtes connecté.</p>
          <button onClick={handleLogout}>Déconnexion</button>
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
