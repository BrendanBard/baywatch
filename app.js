const app = {
  init: function (selectors) {
    this.flicks = []
    this.favStat = []
    this.max = 0
    this.list = document.querySelector(selectors.listSelector)

    document
      .querySelector(selectors.formSelector)
      .addEventListener(
      'submit',
      this.handleSubmit.bind(this)
      )
  },

  renderListItem: function (flick) {

    const item = document.createElement('li')
    item.className = 'listClass'
    return item
  },

  handleSubmit: function (ev) {
    ev.preventDefault()
    const f = ev.target
    const flick = {
      id: this.max + 1,
      name: f.flickName.value,
    }
    f.reset();
    
    this.flicks.unshift(flick)
    const listItem = this.renderListItem(flick)

    this.list.appendChild(listItem)
    const index = this.flicks.indexOf(flick.name)

    const buttonDiv = document.createElement('div')
    const nameDiv = document.createElement('div')
    const favButton = document.createElement('button')
    const delButton = document.createElement('button')
    const upButton = document.createElement('button')
    const downButton = document.createElement('button')

    nameDiv.className = 'list-container'
    nameDiv.textContent = flick.name
    downButton.className = 'secondary button'
    downButton.textContent = '↓'
    upButton.className = 'secondary button'
    upButton.textContent = '↑'
    favButton.className = 'warning button'
    favButton.textContent = 'Fav'
    delButton.className = 'alert button'
    delButton.textContent = 'Delete'
    buttonDiv.className = "buttonDiv"
    listItem.className = 'list-item'
    
    listItem.appendChild(nameDiv)
    buttonDiv.appendChild(upButton)
    buttonDiv.appendChild(downButton)
    buttonDiv.appendChild(favButton)
    buttonDiv.appendChild(delButton)
    listItem.appendChild(buttonDiv)
    
    favButton.addEventListener('click', this.favPress.bind(this))
    delButton.addEventListener('click', this.delPress.bind(this))
    upButton.addEventListener('click', this.upPress.bind(this))
    downButton.addEventListener('click', this.downPress.bind(this))

    this.list.insertBefore(listItem, this.list.firstElementChild)
    this.max++

  },

  favPress: function (ev) {
    if (ev.target.parentElement.parentElement.style.backgroundColor == 'teal') {
      ev.target.parentElement.parentElement.style.backgroundColor = 'transparent'
      this.favStat[this.max] = false
    }
    else {
      ev.target.parentElement.parentElement.style.backgroundColor = 'teal'
      this.favStat[this.max] = true
    }
  },

  delPress: function (ev) {
    const item = ev.target.parentElement.parentElement
    item.remove(ev.target.parentElement.parentElement)
    this.flicks.splice(this.index, 1)
    this.favStat.splice(this.index, 1)
  },

  upPress: function (ev) {
    const item = ev.target.parentElement.parentElement
    item.parentNode.insertBefore(item, item.previousSibling)
    
  },

  downPress: function (ev) {
    const item = ev.target.parentElement.parentElement.nextSibling
    item.parentNode.insertBefore(item, item.previousSibling)
  },
}

app.init({
  formSelector: 'form#flick-form',
  listSelector: '#flick-list',
})