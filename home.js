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
// Cashout calculation
document.getElementById('btn-withdraw-money')
    .addEventListener('click', function(event){
        event.preventDefault();
        const storedPin=1234;
        const agentNumber=document.getElementById('agent-number').value;
        const withdrawAddMoney = parseInt(document.getElementById('withdraw-add-money').value);
        const withdrawPinNumber=Number(document.getElementById('withdraw-pin-number').value);
        console.log(withdrawPinNumber,' ',withdrawAddMoney,' ',agentNumber.length);
        let storedMoney = parseInt(document.getElementById('stored-money').innerText);
        let totalMoney= storedMoney-withdrawAddMoney;
        if(storedPin !==withdrawPinNumber || agentNumber.length!==11){
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
        document.getElementById('form-cashout').style.display ='none';
    })
// toggle - cashout 
document.getElementById('img-cashout')
    .addEventListener('click',function(){
        document.getElementById('form-add-money').style.display ='none';
        document.getElementById('form-cashout').style.display ='block';
    })