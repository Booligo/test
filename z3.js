'use strict';
let money, time;
function start() {
     money =+ prompt("Ваш бюджет на месяц?", '');
     time = prompt("Введите дату в формате YYYY-MM-DD", ''); 

     while(isNaN(money) || money == "" || money == null){
        money =+ prompt("Ваш бюджет на месяц?", '');
     }
}
start();

    let appData = {
        budzhet: money,
        timeData: time,
        income:[],
        expenses:{},
        optionalExpenses:{} , 
        savings: true
    };

function chooseExpenses(){
    for( let i = 0; i < 2; i++ ){
        let a = prompt("Введите обязательную статью расходов в этом месяце", '');
        let b = prompt("Во сколько обойдется?" , '');
     
         if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null 
             && a != '' && b != '' && a.length < 50) {
             console.log("done");
             appData.expenses[a] = b;
         } else {    
            i = i - 1;
              }   
        }
}
chooseExpenses();

function chooseOptExpenses(){
    for( let i = 1; i < 4; i++ ){
        let c = prompt("Введите статью необязательных расходов", '');
             appData.optionalExpenses[i] = c;
         } 
        }
   
   chooseOptExpenses();



   function detectDayBudget(){
    appData.moneyPerDay = (appData.budzhet / 30).toFixed();

    alert("Everyday budzhet: " + appData.moneyPerDay);
   }
   detectDayBudget();

   function detectLevel(){
    if(appData.moneyPerDay < 100){
        console.log("min level wealth");
    } else  if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        console.log("middle level wealth");
    }  else  if(appData.moneyPerDay > 2000){
        console.log("hight level wealth");
    } else  {
        console.log("have a truble");
    }
   }

   detectLevel();


  function checkSavings(){
    if(appData.savings == true){
        let save = +prompt("Какова сумма накоплений?"),
            percent =+prompt("Под какой процент?");

            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
  }

  checkSavings();
    
   