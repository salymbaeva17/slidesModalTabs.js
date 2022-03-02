let tabs = document.getElementById('tabs')
let content = document.querySelectorAll('.content')
let content2 = document.querySelectorAll('.content2')
let tabs2 = document.getElementById('tabs2')

const toggleClass = el => {
    for (let i =0 ; i<tabs.children.length;i++){
        tabs.children[i].classList.remove('active')
    }
    el.classList.add('active')
}
const toggleClass2 = el => {
    for (let i =0 ; i<tabs2.children.length;i++){
        tabs2.children[i].classList.remove('active')
    }
    el.classList.add('active')
}
tabs.addEventListener('click', (e) => {
    const currentTab = e.target.dataset.btn
    toggleClass(e.target)
    for (let i = 0; i<content.length;i++){
        content[i].classList.remove('active')
        if (content[i].dataset.content === currentTab) content[i].classList.add('active')
    }
})

tabs2.addEventListener('click', (e) => {
    const currTab = e.target.dataset.btn2
    toggleClass2(e.target)
    for (let i = 0; i< content2.length; i++){
        content2[i].classList.remove('active')
        if (content2[i].dataset.content === currTab) content2[i].classList.add('active')
    }
})