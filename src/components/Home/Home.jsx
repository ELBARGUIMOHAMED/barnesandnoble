import { Link } from "react-router-dom";
import "./Home.css";
import homebook from "../../assets/Book.png";

export const Home = () => {
return (
 <div className="home">
    <div className="home-infos">
<h2>Cultivez-vous</h2>

<strong><p>Naviguez et découvrez des livres, des romans, des encyclopédies... dans notre site</p></strong>   
  <img src= {homebook} alt="home-book"/>
  <section className="category-select">
    <option value="">Découvrez des livres, des romans à propos de :</option>
    <option value="sport">Sport. </option>
    <option value="culture"> Culture.</option>
    <option value="science"> Science.</option>
    <option value="politique"> Politique.</option>
    <option value="humour"> Humour.</option>
  </section>
<Link to={"/about"}>
<strong><p>à propos de notre site</p></strong>

</Link>

    </div>




    </div>
)


}