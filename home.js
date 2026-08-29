document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        event.preventDefault();
        const storedPin=1234;
        const accountNumber=document.getElementById('account-number').value;
        const addMoney = parseInt(document.getElementById('add-money').value);
        const pinNumber=Number(document.getElementById('pin-number').value);
        console.log(pinNumber,' ',addMoney,' ',accountNumber.length);
        let storedMoney = parseInt(document.getElementById('stored-money').innerText);
        let totalMoney= storedMoney+addMoney;
        if(storedPin !==pinNumber || accountNumber.length!==11){
            alert('Incorrect credentials');
        }
        else{
            document.getElementById('stored-money').innerText=totalMoney;
        }

    })
    // toggle 
    document.getElementById('img-add-money')
    .addEventListener('click',function(){
        document.getElementById('form-add-money').style.display ='block';

    })