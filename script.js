let money = prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let question1 = prompt('Введите обязательную статью расходов в этом месяце', '');
let question2 = prompt('Во сколько обойдется?', '');

let appData = {
  budjet: money,
  timeData: time,
  optionalExpenses: {
    question1: question2
  },
  income: [],
  savings: false
};

alert(appData.budjet / 30);

