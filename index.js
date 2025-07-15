const Income=document.getElementById("Income")
const Food=document.getElementById("Food")
const Rent=document.getElementById("Rent")
const Others=document.getElementById("Others")
const Calculate= document.getElementById("Calculate")
const expence=document.getElementById("Expence")
const balance=document.getElementById("Balance")
const Input2=document.getElementById("Output")
const butnon=document.getElementById("butnon")
const saving=document.getElementById("Saev")
const reamining=document.getElementById("Reamining");



Calculate.addEventListener("click", ()=>{
    const input1=parseInt(Income.value)
    const food=parseInt(Food.value)
    const rent=parseInt(Rent.value)
    const others=parseInt(Others.value)

    const tot=food+rent+others
    expence.innerText=tot
    const income=input1-tot
    Balance.innerText=income

})



butnon.addEventListener("click",()=>{

    
    const balance=parseInt(Balance.innerText)
    const val=parseInt(Output.value)
    
    // const all=(balance*val)/100;

    const all= balance*(val/100);
    saving.innerText = all;

    const bakitaka = balance - all;


    // console.log(reamining);
     reamining.innerText = bakitaka;
   
     

    

    
    






  
})