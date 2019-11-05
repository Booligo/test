'use strict';
 
    
    let money = prompt("Ваш бюджет на месяц?");
    let time = prompt("Введите дату в формате YYYY-MM-DD");
    let 
    a1 = prompt("Введите обязательную статью расходов в этом месяце"),
    a2 = prompt("Во сколько обойдется?"),
    a3 = prompt("Введите обязательную статью расходов в этом месяце"),
    a4 = prompt("Во сколько обойдется?");
    let appData = {
        budzhet: money,
        timeData: time,
        income:[],
        expenses:{
        a1: a2,
        a3: a4
           
        },
        optionalExpenses:{} , 
        savings: false
    };
   // let 
   /*a1 = prompt("Введите обязательную статью расходов в этом месяце"),
    a2 = prompt("Во сколько обойдется?"),
    a3 = prompt("Введите обязательную статью расходов в этом месяце"),
    a4 = prompt("Во сколько обойдется?");*/
    appData.expenses.a1 = a2;
    appData.expenses.a3 = a4;
    alert(appData.budzhet/30);