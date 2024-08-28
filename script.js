


const body = document.querySelector('body')
const box = document.querySelector('.box')
// мы щас создали айтмс1 и туда положили h1 то что напишем в кавычках то положиться в айтмс1
const item1 = document.querySelector('h1')






const qu1 = prompt('Укажите цвет фона')
const qu2 = prompt('Укажите цвет фона бокса')
const qu3 = +prompt('Укажите ширину бокса')







// через это задаем стиль и через это мы сможем сделать динамично, и если поставить qu1 то мы сможем менять цвута
body.style.backgroundColor = qu1
box.style.backgroundColor = qu2
box.style.width = qu3 + 'px'

// = это чтобы применить 