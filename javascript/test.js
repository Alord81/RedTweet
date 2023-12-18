let link = document.querySelectorAll('link')
let title = document.querySelector('title')
let btnAdd = document.querySelector('.add')
let btnRem = document.querySelector('.remmove')
let msg = 0


// Change title 

localStorage.setItem('title of page', JSON.stringify(title.innerHTML))
let beforTitle = localStorage.getItem('title of page')

beforTitle = beforTitle.slice(1, beforTitle.length - 1)


checkMSG()
btnAdd.addEventListener('click', () => {
    msg += 1;
    checkMSG();
})

btnRem.addEventListener('click', () => {
    if (msg >= 0) {
        msg -= 1
        checkMSG()
    }
})

function checkMSG() {
    if (msg > 0) {
        title.innerHTML = `(${msg}) ${beforTitle}`
        link[0].setAttribute('href', './assets/Images/main_images/logo-msg.png')
    } else {
        title.innerHTML = `${beforTitle}`
        link[0].setAttribute('href', './assets/Images/main_images/logo-1.png')
    }
}


//--- Change title ---


// New Account

//--- New Account ---


