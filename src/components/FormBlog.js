import { useState } from "react";
 

export default function FormBlog(){
    const [nom, setNom] = useState('')
    const [com, setCom] = useState('')
    const [email, setEmail] = useState('')
    let erreurMail = email.includes('@')
    
    return (
        <form onSubmit="valider">
        <label>
          Nom Prénom :
          <input type="text" name="name" onChange={(e)=>setNom(e.target.value)} />
        </label>
        <label>
          Commentaire :
          <input type="text" name ="commentaire" onChange={(e)=>setCom(e.target.value)}/>
        </label>
        <label>
          E-mail :
          <input type="mail" name ="email" onChange={(e)=>setEmail(e.target.value)} />
        </label>
        <input type="submit" value="valider" onClick={()=>valider(nom,com)} />
      </form>
    )
}

function valider (data1, data2){
    alert("Voici le commentaire de "+ data1 + " : "+ data2);
}