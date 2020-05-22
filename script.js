let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let statya = prompt("Введите обязательную статью расходов в этом месяце", "");
let summa = prompt("Во сколько обойдется?", "");
let statya2 = prompt("Введите обязательную статью расходов в этом месяце", "");
let summa2 = prompt("Во сколько обойдется?", "");

let appData = {
    budjet: money,
    timeData: time,
    expenses: { [statya] : summa, [statya2] : summa2 },
    optionalExpenses: {},
    income: [],
    savings: false
};
console.log(appData);

alert(`бюджет на 1 день = ${ money/30}`);


