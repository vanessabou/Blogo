import '../styles/UserCard.css';
import InfosUser from './InfosUser';
import Rating from './Rating.js';
import FormBlog from './FormBlog';
import { useEffect, useState } from "react";
function UserCard (){
    const bool_suivi= false;
    const [count,setCount]= useState (7);

    const users= [{nom : 'Thomas', commentaire: 'Trop bien', suivi: true, star: 5, smiley: 5 },
                 {nom : 'Max', commentaire: 'Super', suivi: true, star: 5, smiley: 5},
                 {nom : 'Alex', commentaire: 'Cool', suivi: false , star: 4, smiley: 4},
                 {nom : 'Julien', commentaire: 'Moyen', suivi: true , star: 3, smiley: 3 },
                 {nom : 'Kim', commentaire: 'pas ouf', suivi: false, star: 2, smiley: 2  },
                 {nom : 'Romain', commentaire: 'Nul', suivi: false , star: 1, smiley: 1
                }] 

    useEffect(()=>{
        users.push({nom : 'New', 
                    commentaire: 'Trop bien',   
                    suivi: false,
                    star: 5,
                    smiley: 5} )
    },[users])
    console.log (users);


    return (  
    <div className="UserCard">
        <button onClick= {()=> setCount(count+1)} name="cliquez"> Cliquez </button>
        <ul className='Liste'>
            {users.map ((user)=>
                <li>
                    <InfosUser value = {user}/>
                </li>   
            )}
            <li> </li>
            
        </ul>
    </div>
     
)}

export default UserCard