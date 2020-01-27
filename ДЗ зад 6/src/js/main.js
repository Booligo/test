
let startbtn = document.getElementById("start"),
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    budgetValue = document.getElementsByClassName('budget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue  = document.getElementsByClassName('monthsavings-value')[0],
    yearSavings = document.getElementsByClassName('yearsavings-value')[0],

    input0 = document.getElementsByClassName('expenses-item'),
    button0 = document.getElementsByTagName('button')[0],
    button1 = document.getElementsByTagName('button')[1],
    button2 = document.getElementsByTagName('button')[2],
    optitem = document.querySelectorAll('.optionalexpenses-item'),
    sum = document.querySelector('.choose-sum'),
    proc = document.querySelector('.choose-percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings');

let money, time;
    let bool = false;

startbtn.addEventListener('click', function() {
    bool = true;
    time = prompt("Введите дату в формате YYYY-MM-DD", ''); 
    money =+ prompt("Ваш бюджет на месяц?", '');

    while(isNaN(money) || money == "" || money == null){
        money =+ prompt("Ваш бюджет на месяц?", '');
    }
    appData.budzhet = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();
});

button0.addEventListener('click', function() {
    if (bool == true){
    let sum = 0;

    for( let i = 0; i < input0.length; i++ ){
        let a = input0[i].value,
            b = input0[++i].value;
     
         if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null 
             && a != '' && b != '' && a.length < 50) {
             
             appData.expenses[a] = b;
             sum+= +b;
         } else {    
            i = i - 1;
              }   
        }    
        expensesValue.textContent = sum;
    }
});

button1.addEventListener('click', function() {
    if (bool == true){
    for( let i = 0; i < optitem.length; i++){
        let c = optitem[i].value;
             appData.optionalExpenses[i] = c;
             optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
         }   
        }
});

button2.addEventListener('click', function(){
    if (bool == true){
    let sum = 0;

    for( let i = 0; i < input0.length; i++ ){
        let a = input0[i].value,
            b = input0[++i].value;
     
         if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null 
             && a != '' && b != '' && a.length < 50) {
             
             appData.expenses[a] = b;
             sum+= +b;
         } else {    
            i = i - 1;
              }   
        }    

    if (appData.budzhet != undefined) {
        appData.moneyPerDay = ((appData.budzhet - sum)/ 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

    if(appData.moneyPerDay < 100){
        levelValue.textContent = "min level wealth";
    } else  if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        levelValue.textContent = "middle level wealth";
    }  else  if(appData.moneyPerDay > 2000){
        levelValue.textContent = "hight level wealth";
    } else  {
        levelValue.textContent = "have a truble";
    }

    } else {
        dayBudgetValue.textContent = "have a truble";
    }
}
});

incomeItem.addEventListener('input', function(){
    if (bool == true){
    let items = incomeItem.value;
         appData.income = items.split(', ');
         incomeValue.textContent = appData.income;
    }
});

checkSavings.addEventListener('click', function(){
    if (bool == true){
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
}
});

sum.addEventListener('input', function(){
    if (bool == true){
    if (appData.savings == true) {
        let summa = +sum.value,
            percent = +proc.value;

        appData.monthIncome = summa/100/12*percent;
        appData.yearIncome = summa/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavings.textContent = appData.yearIncome.toFixed(1);
}
    }
});

proc.addEventListener('input', function(){
    if (bool == true){
    if (appData.savings == true) {
        let summa = +sum.value,
            percent = +proc.value;
            appData.monthIncome = summa/100/12*percent;
            appData.yearIncome = summa/100*percent;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavings.textContent = appData.yearIncome.toFixed(1);
    }
}
});



let appData = {
    budzhet: money,
    timeData: time,
    income:[],
    expenses:{},
    optionalExpenses:{} , 
    savings: false
};
    

