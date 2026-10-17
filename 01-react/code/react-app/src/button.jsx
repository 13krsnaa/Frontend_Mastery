function doSomething(event){
    console.log("Hello");
    console.log(event);

}

function printBye(){
    console.log("bye");
}


export default function ButtonOnClick(){
    return (
        <div> 
            <button onClick={doSomething}>Click me !</button>
            <p onMouseOver={printBye}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, porro debitis. Facere voluptates debitis modi laboriosam laborum atque aliquam voluptatibus ea ipsum ut nulla sequi, doloribus commodi dolores maiores ducimus eum optio necessitatibus, ratione velit et sed! Repellat reprehenderit voluptas deleniti hic repudiandae facilis ea harum laudantium quod est! Deserunt, eaque non! Sapiente consequatur neque adipisci asperiores voluptatibus aliquid repellendus saepe. Delectus voluptates sapiente at, molestias veniam eius ducimus optio, eos esse tempore, hic cumque! Quia magni aspernatur distinctio, expedita vitae iure aliquam minus rerum voluptates voluptas pariatur voluptatem dolores quibusdam minima accusantium! Impedit quis et incidunt, rem quo tenetur?
            </p>
        </div>
    )
}