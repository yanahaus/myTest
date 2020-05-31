let money, time;
function start() {
  money = +prompt("Ваш бюджет на месяц?", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "");
  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
}
start();

let appData = {
  budjet: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", "");
    let b = +prompt("Во сколько обойдется?", "");
    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '') {
      appData.expenses[a] = b;
      console.log('done')
    } else {
      i--;
    }
  }
}
chooseExpenses();

function detectDayBudget() {
  appData.moneyPerDay = (appData.budjet / 30).toFixed(1);
  alert("Ежедневный бюджет " + appData.moneyPerDay);
}
detectDayBudget();

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt('Какова сумма накоплений', '');
    let percent = +prompt('Под какой процент', '');
    appData.monthIncome = save / 100 / 12 * percent;
    alert('Доход в месяц с вашего депозита:' + appData.monthIncome);
  }
}
checkSavings();


function chooseOptExpenses () {
  for (let i = 0; i < 3; i++) {
    let c = prompt("Статья необязательных расходов?", "");
    appData.optionalExpenses[i+1] = c;
  }
};
chooseOptExpenses();

