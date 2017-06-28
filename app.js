const app = {
  init: function(selectors) {
    this.flicks = []
   // this.flickFav = []
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
    //item.textContent = flick.name
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
    
    const favButton = document.createElement('button')
    const buttonDiv = document.createElement('div')
    const delButton = document.createElement('button')
    favButton.className = 'warning button'
    favButton.textContent = 'Fav'
    delButton.className = 'alert button'
    delButton.textContent = 'Delete'
    buttonDiv.textContent = flick.name
    buttonDiv.appendChild(favButton)
    buttonDiv.appendChild(delButton)
    this.list.appendChild(buttonDiv)
    favButton.addEventListener('click', this.favPress.bind(this))
   
    this.max ++
  },
  favPress: function(ev){
      if(ev.target.parentElement.style.backgroundColor == 'yellow'){
    ev.target.parentElement.style.backgroundColor = 'transparent'
      }
      else{
          ev.target.parentElement.style.backgroundColor = 'yellow'
      }
  },
  delPress: function(){
      
  }
}

app.init({
  formSelector: 'form#flick-form',
  listSelector: '#flick-list',
})