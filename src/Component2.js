function Component2(props){
    function testFunc(){
        alert("this is button");
    }
    return(
        <>
        This is functional Component2
        <h1>{props.friend}</h1>
        <button onClick={testFunc}>Click me</button>
        </>
    )
}
export default Component2;