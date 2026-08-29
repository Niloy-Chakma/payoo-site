document.getElementById("btn-login")
    .addEventListener('click',function(event){
        event.preventDefault();
        const inputNumber=parseInt(document.getElementById('input-number').value);
        const inputPin=parseInt(document.getElementById('input-pin').value);
        console.log(inputNumber, inputPin);
        if(inputNumber===12345678 &&inputPin===1234){
            window.location.href="home.html";
        }
        else{
            alert("credentials incorrect");
        }
    })