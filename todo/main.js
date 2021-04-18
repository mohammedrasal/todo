let input = document.getElementById("kitchen-input")
let addBtn = document.getElementById("add-btn")
let list = document.getElementById("k-items-list")

//create an empty arry
let inputData
var inputDataStore = [];
let itemArray=[]

//step 2

//set local storage

//add items

function setLocalStorage() {
    localStorage.setItem('input', JSON.stringify(itemArray))
}

function getLocalStorage() {
    if (localStorage.getItem('input')) {
        itemArray = JSON.parse(localStorage.getItem('input'))
        buildUI()
    } 
}

function buildUI() {
    list.textContent=''
    itemArray.forEach((item) => {
        console.log(item)
 
    li = document.createElement('li')
    let span = document.createElement('span')
    li.appendChild(span)
    span.innerText = item

    li.style.cssText = 'animation-name: slideIn ;'
    input.value = '';
    input.focus()
    inputDataStore.push(inputData)
    list.appendChild(li)

    // create remove button

    let removeBtn = document.createElement('i')
    removeBtn.classList.add('fas', 'fa-trash')
    li.appendChild(removeBtn)

    //create edit button

    let editBtn = document.createElement('i')
    editBtn.classList.add('fas', 'fa-edit')
        li.appendChild(editBtn)
    })
}
function addItems() {
    inputData = input.value
    itemArray.push(inputData)
    console.log(itemArray)

    setLocalStorage()
    getLocalStorage()

}


//remove item
function removeItem(event) {
    console.log(event)

    if (event.target.classList[1] === 'fa-trash') {
        let item = event.target.parentElement
        item.classList.add('slideOut')
        item.addEventListener('transitionend', function () {
            item.remove()

        })

    }
}

//edit item

function editItem(event) {
    if (event.target.classList[1] == 'fa-edit') {
        let editedValue = prompt('please add new text')
        let item = event.target.parentElement
        let span = item.querySelector('span')
        span.innerText = editedValue


    }
}

//step  1

//add an event lister to the button
addBtn.addEventListener('click', addItems)
list.addEventListener('click', removeItem)
list.addEventListener('click', editItem)
getLocalStorage()

// list.addEventListener('click', re)


// set data to local storage
