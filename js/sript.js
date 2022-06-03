let siteType = prompt("Какой тип сайта вам нужен? \n1 - сайт-визитка (5000₽) \n2 - интернет-магазин (10000₽) \n3 - социальная платформа (20000₽) \n\nВведите номер интересуещего сайта")

let siteDisain = prompt("Какой дизайн сайта вам нужен? \n1 - шаблоный (+0₽) \n2 - изготовленный на заказ (+5000₽) \n\nВведите номер интересуещего сайта")

let siteResponsiveness = prompt("Нужна ли адаптивность для вашего сайта? \n1 - Да (+3000₽) \n2 - Нет (+0₽) \n\nВведите номер интересуещего сайта")


let price_calculator = [
    [5000, 10000, 20000],
    [0, 5000],
    [3000, 0]
]

let price = price_calculator[0][siteType - 1] + price_calculator[1][siteDisain - 1] + price_calculator[2][siteResponsiveness - 1] 


let days_calculator = [
    [2, 5, 10],
    [0, 5],
    [3, 0]
]

let days = days_calculator[0][siteType - 1] + days_calculator[1][siteDisain - 1] + days_calculator[2][siteResponsiveness - 1] 


if (days < 5){
    alert("Выбранный вами сайт будет стоить " + price + "₽ \nCайт будет готов через " + days + " дня" )
}
else{
    alert("Выбранный вами сайт будет стоить " + price + "₽ \nCайт будет готов через " + days + " дней" )
}


/* 
site = {
    Type: siteType,
    Disain: siteDisain,
    Responsiveness: siteResponsiveness
}

let price = 0

if (site.Type == 1){
    price = 5000
}
else if(site.Type == 2){
    price = 10000
}
else price = 20000




if (site.Disain == 2){
    price += 5000
}




if (site.Responsiveness == 1){
    price += 3000
}


alert("Выбранный вами сайт будет стоить " + price + "₽")


console.log(price)


*/