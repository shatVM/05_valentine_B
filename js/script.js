console.log('Script connected');

const arrayOfLoveWishes = [
    "Нехай твоє серце завжди буде наповнене теплом і ніжністю!",
    "Кохання нехай буде міцним, як сталь, і ніжним, як вітерець!",
    "Бажаю, щоб кожен день був сповнений обіймами та щасливими моментами!",
    "Нехай твоє серце ніколи не знає самотності!",
    "Хай кохання буде взаємним, щирим і безмежним!",
    "Нехай кожен ранок починається з усмішки коханої людини!",
    "Бажаю, щоб ваше кохання ставало міцнішим з кожним днем!",
    "Хай у твоєму житті завжди буде місце для романтики та сюрпризів!",
    "Нехай почуття будуть щирими, а серце завжди зігрітим!",
    "Бажаю безмежного щастя та найтепліших обіймів!",
    "Хай ваше кохання буде джерелом радості та натхнення!",
    "Бажаю знайти ту людину, яка зробить твоє життя справжньою казкою!",
    "Нехай любов наповнює твоє життя сенсом і гармонією!",
    "Хай завжди поруч буде людина, яка розуміє без слів!",
    "Бажаю взаєморозуміння, ніжності та приємних несподіванок!",
    "Хай кожна мить, проведена разом із коханою людиною, буде безцінною!",
    "Нехай ваше кохання перемагає всі труднощі і стає тільки сильнішим!",
    "Бажаю, щоб у вашому житті було більше романтичних моментів!",
    "Хай кожен день буде сповнений любов’ю та ніжністю!",
    "Нехай кохання буде безмежним, як небо, і яскравим, як зорі!"
]

let countOfHearts = 5
console.log('countOfHearts ' + countOfHearts)

document.getElementById('count-of-hearts').innerText = '🧡'.repeat(countOfHearts)

//Опрацювання натискання на кнопку "Отримати побажання"
document.getElementById('btn_love_wishes').addEventListener('click', () => {

    console.log('Button clicked');

    let index = Math.floor(Math.random() * arrayOfLoveWishes.length)

    //console.log('Номер елементу масиву - ', index);

    document.getElementById('p_love-wishes').innerText = arrayOfLoveWishes[index];

    countOfHearts--
    console.log('countOfHearts ' + countOfHearts)
    document.getElementById('count-of-hearts').innerText = '🧡'.repeat(countOfHearts) + '🤍'.repeat(5 - countOfHearts)

    if (countOfHearts == 0) {
        document.getElementById('btn_love_wishes').style.display = 'none'

    }

})


//Опрацювання натискання на кнопку "Купити 🧡"
document.getElementById('btn-buy-hearts').addEventListener('click', () => {

    countOfHearts = 5
    document.getElementById('count-of-hearts').innerText = '🧡'.repeat(countOfHearts)
    document.getElementById('btn_love_wishes').style.display = 'inline-block'
    document.getElementById('p_love-wishes').innerText = ''

    console.log('btn-buy-hearts clicked')
})
