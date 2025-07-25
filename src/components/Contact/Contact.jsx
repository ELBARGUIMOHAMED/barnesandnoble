import "./Contact.css";
import React ,{ useState } from "react";
export const Contact = () => {
    
    return (
<div className="contact">

<div className="contact-infos">
<label> <strong>Nom:</strong> </label>
<input type="text" className="inpt1"  placeholder="Entrez votre nom ..."/> <br/>
<label> <strong>Email:</strong> </label>
<input type="email" className="inpt2" placeholder="Entrez votre email ..."/> <br/>
<label> <strong>Preférances :</strong> </label>
<input type="text" className="inpt3" placeholder="quels livres préférez vous ?" /> <br/>
<label> <strong>Avis:</strong></label>
<input type="text" className="inpt4" placeholder="Vos retours nous intéréssent." />
<button className="btn">Envoyer</button>

</div>

</div>
    )
}