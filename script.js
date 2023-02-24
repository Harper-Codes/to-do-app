const newCard = document.querySelector('.newCard');
const card = document.querySelector('.card')
const title = document.querySelector('.title')
const content = document.querySelector('.content')

newCard.addEventListener('click', () => {
    let createTitle = prompt("Enter a title: ")
    let createItem = prompt("Enter your item: ")
    title.innerHTML = createTitle;
    content.innerHTML = createItem;
})

const checkbox = document.querySelector('input[name=importantTask]');
checkbox.addEventListener('mousedown', () => {
    card.style.backgroundColor = "yellow";
});
