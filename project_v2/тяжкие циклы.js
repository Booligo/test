'use strict';
 let money, time;
function start() {
     money =+ prompt("Ваш бюджет на месяц?", '');
     time = prompt("Введите дату в формате YYYY-MM-DD", ''); 

     while(isNaN(money)){

     }
}




   
    let money =+ prompt("Ваш бюджет на месяц?", '');
    let time = prompt("Введите дату в формате YYYY-MM-DD", '');
    
    let appData = {
        budzhet: money,
        timeData: time,
        income:[],
        expenses:{
        },
        optionalExpenses:{} , 
        savings: false
    };
   for( let i = 0; i < 2; i++ ){
   let a = prompt("Введите обязательную статью расходов в этом месяце", '');
   let b = prompt("Во сколько обойдется?" , '');

    if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null 
        && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {    
       i=i-1;
         }   
   }
   
    



 
    
   