import React, { useState } from 'react';
import "./login.css";
import RouteLogin from './RouteLogin';
import { useDispatch, useSelector } from 'react-redux';

export default function Inscription() {
  const [per, setPer] = useState({
    Email: '',
    Prenom: '',
    Nom: '',
    psword: '',
    Adresse: '',
  });

  const Persone = useSelector(state => state.Persone);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setPer(prevState => ({ ...prevState, [id]: value }));
  };

  const AddPerson = () => {
    const psword1 = document.getElementById("psword1").value;
    const psword2 = document.getElementById("psword2").value;
   if(psword1==psword2){
    alert("l'inscription succes !")
   }
   else{
    alert("Mode pass Incorrect")
   }
    // Assurez-vous de définir 'per' correctement avant de l'utiliser
    
  
    // dispatch({
    //   type: "ADDUSER",
    //   payload: per,
    // });
  
    // Assurez-vous de définir 'Persone' correctement si vous souhaitez le logguer ici
    console.log(Persone);
  }

  return (
    <div >
      <center>
        <RouteLogin />
        <br />
        <div className='col-10  col-xl-6'>
          <fieldset class="border p-4">
          <h2>Inscription</h2><br />
          <input type="email" className="form__field" placeholder="Email" id='Email' onChange={handleInputChange} required />
          <input type="text" className="form__field" placeholder='Prenom' id='Prenom' onChange={handleInputChange} required />
          <input type="text" className="form__field" placeholder='Nom' id='Nom' onChange={handleInputChange} required />
          <input type="password" className="form__field" placeholder='Mot de passe' id='psword1' onChange={handleInputChange} required />
          <input type="password" className="form__field" placeholder='Confirmer le mot de passe' id='psword2' onChange={handleInputChange} required />
          <input type="text" className="form__field" placeholder='Adresse' id='Adresse' onChange={handleInputChange} required />
          <input type="text" className="form__field" placeholder='Telephone' /><br /><br />
          <input type="checkbox" className="form-check-input" />
          <span style={{ paddingLeft: "1%" }}> vous Acceptez les conditions d'utilisation et la politique de confidentialité</span>
          <input type="button" className="btn" onClick={AddPerson} style={{ background: "#004930", width: "100%", padding: "3%", marginTop: "10%", color: "white" }} value="S'inscrire" />
          </fieldset>
        </div>
      </center>
    </div>
  );
}
