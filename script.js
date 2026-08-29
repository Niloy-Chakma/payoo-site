document.getElementById("btn-login")
    .addEventListener('click',function(event){
        event.preventDefault();
        const inputNumber=number(document.getElementById('input-number').value);
        const inputPin=number(document.getElementById('input-pin').value);
        console.log(inputNumber, inputPin);
        if(inputNumber===12345678 &&inputPin===1234){
            window.location.href="home.html";
        }
        else{
            alert("credentials incorrect");
        }
    })