'use strict';

let startbtn = document.getElementById('start'),
    dayBudgetValue = document.getElementByClassName('.daybudget-value'),
    budgetValue = document.getElementByClassName('.budget-value'),
    levelValue = document.getElementByClassName('.level-value'),
    expensesValue = document.getElementByClassName('.expenses-value'),
    optionalExpensesValue = document.getElementByClassName('.optionalexpenses-value'),
    incomeValue = document.getElementByClassName('.income-value'),
    monthSavingsValue  = document.getElementByClassName('.monthsavings-value'),
    yearSavings = document.getElementByClassName('.yearsavings-value'),
    input0 = document.getElementsByClassName('.expenses-item'),
    button0 = document.getElementsByTagName('button'[0]),
    button1 = document.getElementsByTagName('button'[1]),
    button2 = document.getElementsByTagName('button'[2]),
    optitem = document.querySelectorAll('.optionalexpenses-item'),
    sum = document.querySelector('.choose-sum'),
    proc = document.querySelector('.choose-percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings');

let money, time;

startbtn.addEventListener('click', function(){
    time = prompt("Введите дату в формате YYYY-MM-DD", ''); 
    money =+ prompt("Ваш бюджет на месяц?", '');
   
    while(isNaN(money) || money == "" || money == null){
       money =+ prompt("Ваш бюджет на месяц?", '');
    }
    appData.budzhet = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
});
    let appData = {
        budzhet: money,
        timeData: time,
        income:[],
        expenses:{},
        optionalExpenses:{} , 
        savings: true,
        chooseExpenses: function(){
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
        },
        detectDayBudget: function(){
            appData.moneyPerDay = (appData.budzhet / 30).toFixed();
            alert("Everyday budzhet: " + appData.moneyPerDay);
        },
         detectLevel: function(){
            if(appData.moneyPerDay < 100){
                console.log("min level wealth");
            } else  if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
                console.log("middle level wealth");
            }  else  if(appData.moneyPerDay > 2000){
                console.log("hight level wealth");
            } else  {
                console.log("have a truble");
            }
         },
         checkSavings: function(){
            if(appData.savings == true){
                let save = +prompt("Какова сумма накоплений?"),
                    percent =+prompt("Под какой процент?");
        
                    appData.monthIncome = save/100/12*percent;
                    alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
            }
         },
         chooseOptExpenses: function(){
            for( let i = 1; i < 4; i++ ){
                let c = prompt("Введите статью необязательных расходов", '');
                     appData.optionalExpenses[i] = c;
                 }   
         },
         chooseIncome: function(){
             
             let items;
             while(items == "" ||  (typeof(items)) !== 'string' || (typeof(items)) == null  ){
                items = prompt('Что принесёт дополнительный доход?(Перечислитечерез запятую');
            }
                let arr = items.split(',');
                arr.forEach(function(item, i){
                console.log(i+1 + ': ' + "Способы доп. заработка: " + item );
                }) 
             appData.income = items.split(',');
             appData.income.push(prompt('Может что-то ещё?'));
             appData.income.sort();
         }
    };

appData.chooseExpenses();
appData.detectDayBudget();
appData.detectLevel();
appData.checkSavings ();   
appData.chooseOptExpenses();
appData.chooseIncome();
for (let key in appData){
    console.log("Наша программа включает в себя данные:  " + key + ' - '+ appData[key]);
}
