
import '../styles/Banniere.css';
import logo from '../assets/Blogo.png'

function Banniere (){

    return <div className="banniere">
            <img src={logo} className="imglogo"/>
            <h1> Bienvenue sur Blogo Déploiement automatique</h1>
    </div>
     
}

export default Banniere