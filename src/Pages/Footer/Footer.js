import React from 'react'
import "./Footer.css"
export default function Footer() {
  return (
    <div className='monFoter'>
    <div >
         <h2>SPONSOR PRINCIPAL</h2>
         <img className='imgfooter' src={process.env.PUBLIC_URL+`/Image/partner1.png`} alt="" /> 
         <h2>PARTENAIRES DE LA CAF</h2>
         <div >
            <img className='imgfooter'  src={process.env.PUBLIC_URL+`/Image/partner4.png`} alt="" />
            <img className='imgfooter' src={process.env.PUBLIC_URL+`/Image/partner5.png`}  alt="" />
            
         </div>
         <div>
         <h2>SUPPORTEURS DE LA COMPETITION</h2>
         <img className='imgfooter' src={process.env.PUBLIC_URL+`/Image/partner5.png`}  alt="" />
         <img className='imgfooter' src={process.env.PUBLIC_URL+`/Image/partner6.png`}   alt="" />
         <img className='imgfooter' src={process.env.PUBLIC_URL+`/Image/partner7.png`}  alt="" />
         </div>
    </div>
    <div className='nav_footer' >
        <ul className='navbar' >
            <li>Politique de confidentialité et de cookies</li>
            <li>Conditions générales d'utilisation</li>
            <li>Tous droits réservés</li>
            <li>FAQ</li>
            <li>support@can2023-tickets.com</li>
        </ul>
    </div>
    </div>
  )
}
