import "./About.css";
import { Question } from "phosphor-react";
import {Link} from "react-router-dom";
export const About = () => {
return (
<div className="about">

<div className="about-infos">
<h2>Notre Vision</h2>
<p>notre objectif est d'offrir aux lecteurs l'opportunité de découvrir des centaines de livres, de romans, d'encyclopédies 
    sur diverses sujets (sport,culture,politique,science,apprentissage...) gratuitement et avec un accés facile.
</p>
<h2>Feedback</h2>

<p>les retours et les critiques pértinents des utilisateurs nous aide à progresser, si vous avez des points d'amélioration pour notre site , dites nous.</p>

<Link to="/contact">
  <Question /> Donnez vos avis
</Link>


</div>


 </div>
)

}