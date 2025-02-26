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

]

let countOfHearts = 5
console.log('countOfHearts ' + countOfHearts)
document.getElementById('count-of-hearts').innerText = '🧡'.repeat(countOfHearts)

//Опрацювання натискання на кнопку "Отримати побажання"
document.getElementById('btn-love-wishes').addEventListener('click', () => {
    console.log('Button clicked');
    let index = Math.floor(Math.random() * arrayOfLoveWishes.length)
    document.getElementById('p-love-wishes').innerText = arrayOfLoveWishes[index];

    let randomIMG = Math.floor(Math.random()*3)
    console.log('randomIMG '  + randomIMG);
    document.getElementById('p-love-img').innerHTML = `<img src='img/gallery/${randomIMG}.png' alt = "Heart for U">`

    countOfHearts--
    console.log('countOfHearts ' + countOfHearts)
    document.getElementById('count-of-hearts').innerText = '🧡'.repeat(countOfHearts) + '🤍'.repeat(5 - countOfHearts)
    if (countOfHearts == 0) {
        //document.getElementById('btn-love-wishes').style.display = 'none'
         document.getElementById('btn-love-wishes').style.background = 'white'
          document.getElementById('btn-love-wishes').disabled = true
    }

})


//Опрацювання натискання на кнопку "Купити 🧡"
document.getElementById('btn-buy-hearts').addEventListener('click', () => {

    countOfHearts = 5
    document.getElementById('count-of-hearts').innerText = '🧡'.repeat(countOfHearts)
    document.getElementById('btn-love-wishes').style.background = '#ff5a26'
    document.getElementById('btn-love-wishes').disabled = false;
    document.getElementById('p-love-wishes').innerText = ''
    document.getElementById('p-love-img').innerHTML = ``
    console.log('btn-buy-hearts clicked')
})
