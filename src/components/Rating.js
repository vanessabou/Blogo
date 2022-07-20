import userEvent from "@testing-library/user-event"

function Rating(props){
    const {ratingValue,value} = props
    const range =[1,2,3,4,5]
    const type = ratingValue==="étoile" ?  '★' :  '😊'
    return <div> 
        {range.map ((rang) =>
        rang <= value ? type : null
        )}
    </div>

}
export default Rating