class App
{
    runApplication()
    {
        console.log("hello world!")
        let Button = document.getElementById("myButton");
        Button.addEventListener('click', ()=>{
            alert("hoi");
        });
    }
}

let app = new App();
app.runApplication(); 