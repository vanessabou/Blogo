import Rating from "./Rating"
function InfosUser(props){
    const {value} = props
    return (
        <>
            <h1 > {value.nom} </h1> 
            Commentaire: {value.commentaire} <br /> 
            {value.suivi ? 'suivi' : 'non suivi' }
            <Rating ratingValue="étoile" value={value.star}/>
            <Rating ratingValue="smiley" value={value.smiley}/>
        </>
        
    )
    
}
//onClick ={PremierEvent}
function PremierEvent (e){
    console.log('voila les infos de notre event',e)
}
export default InfosUser