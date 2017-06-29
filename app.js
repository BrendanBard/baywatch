const app = {
  init: function(selectors) {
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

  renderListItem: function(flick) {
     
    const item = document.createElement('li')
    item.className = 'listClass'
    return item
  },

  handleSubmit: function(ev) {
    ev.preventDefault()
    const f = ev.target
    const flick = {
      id: this.max + 1,
      name: f.flickName.value,
    }
    this.flicks.push(flick)
    const listItem = this.renderListItem(flick)
    
    this.list.appendChild(listItem)
    const index = this.flicks.indexOf(flick.name)
    const favButton = document.createElement('button')
    const buttonDiv = document.createElement('div')
    
    const delButton = document.createElement('button')
    const upButton = document.createElement('button')
    const downButton = document.createElement('button')

  
    downButton.className = 'secondary button'
    downButton.textContent = '↓'
    upButton.className = 'secondary button'
    upButton.textContent = '↑'
    favButton.className = 'warning button'
    favButton.textContent = 'Fav'
    delButton.className = 'alert button'
    delButton.textContent = 'Delete'
    buttonDiv.textContent = flick.name
    
    
    buttonDiv.className = "buttonDiv"
    buttonDiv.appendChild(upButton)
    buttonDiv.appendChild(downButton)
    buttonDiv.appendChild(favButton)
    buttonDiv.appendChild(delButton)
    listItem.appendChild(buttonDiv)
    favButton.addEventListener('click', this.favPress.bind(this))
    delButton.addEventListener('click', this.delPress.bind(this))
    upButton.addEventListener('click', this.upPress.bind(this))
    downButton.addEventListener('click', this.downButton.bind(this))
    this.max ++
    f.reset();
  },
  favPress: function(ev){
      if(ev.target.parentElement.style.backgroundColor == 'yellow'){
    ev.target.parentElement.style.backgroundColor = 'transparent'
    favStat[max] = false
      }
      else{
          ev.target.parentElement.style.backgroundColor = 'yellow'
          favStat[max] = true
      }
  },
  delPress: function(ev){
    const item = ev.target.parentElement.parentElement
    console.log(item)
    item.remove(ev.target.parentElement.parentElement)
    this.flicks.splice(this.index, 1)
  },

  upPress: function(ev){

  },

  downPress: function(ev){

  },
}

app.init({
  formSelector: 'form#flick-form',
  listSelector: '#flick-list',
})