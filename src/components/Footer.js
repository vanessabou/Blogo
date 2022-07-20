import '../styles/Footer.css';


function Footer (){
    const numero=" 06.12.34.56.78"
    const site ="https://www.lessonssharing.fr"
    
    return (
    <div className="Footer">
        <ul className='liste'>
            <li> Numero: { numero } </li>
            <li> Site: { site } </li>
            <li> All right reserved </li>
        </ul>
    </div>
     
)}

export default Footer