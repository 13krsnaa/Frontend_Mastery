
function StudentCard({ name , branch , year , cgpa , isPlaced}){
    return (
        <div>
            <h4>Name : {name}</h4>
            <p>Branch : {branch}</p>
            <p>Year : {year}</p>
            <p>cgpa : {cgpa}</p>
            <h6>Is Placed : {isPlaced ? "Placed ✅" : "Got placed into Goldman Sachs"}</h6>
            {isPlaced ? <p> Congratulations! . </p> : <p> Be Consistent hard work pays off. </p> }


        </div>
    )
}
function Button({label = "Click Me", color = "blue"}){
    return 
<button style={{ color}}>{label}</button>;
}

export default StudentCard;

export {Button};