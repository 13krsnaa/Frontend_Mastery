function doSomething(){
    console.log("Hello");

}




export default function ButtonOnClick(){
    return (
        <div> 
            <button onClick={doSomething}>Click me !</button>
        </div>
    )
}