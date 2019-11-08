'use strict';
 
   
    let money =+ prompt("Ваш бюджет на месяц?");
    let time = prompt("Введите дату в формате YYYY-MM-DD");
    let k = 0 ;
    let l = 1 ;
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
   
    appData.moneyPerDay = appData.budzhet / 30;
    alert("Everyday budzhet: " + appData.moneyPerDay);

    if(appData.moneyPerDay < 100){
        console.log("min level wealth");
    } else  if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        console.log("middle level wealth");
    }  else  if(appData.moneyPerDay > 2000){
        console.log("hight level wealth");
    } else  {
        console.log("have a truble");
    }
    
    let i = 0;
while(i < 2){
    let a = prompt("Введите обязательную статью расходов в этом месяце", '');
    let b = prompt("Во сколько обойдется?" , '');
    
    if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null 
        && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
        i++;
    } else {    
        i=i-1;
         }   
   }
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", '');
    let b = prompt("Во сколько обойдется?" , '');
    
    if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null 
        && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
        i++;
    } else {    
        i=i-1;
    }   
}
 while(i<2) 



 
    
   