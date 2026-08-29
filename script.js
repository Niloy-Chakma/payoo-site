document.getElementById("btn-login")
    .addEventListener('click',function(event){
        event.preventDefault();
        const inputNumber=Number(document.getElementById('input-number').value);
        const inputPin=Number(document.getElementById('input-pin').value);
        console.log(inputNumber, inputPin);
        if(inputNumber===12345678 &&inputPin===1234){
            window.location.href="home.html";
        }
        else{
            alert("credentials incorrect");
        }
    })