const app = {
   init: function(formSelector){
    document
    .querySelector(formSelector)
    .addEventListener('submit', this.handleSubmit)
},
    //handleSubmit(){}
    handleSubmit:function(ev){
        ev.preventDefault()
        const flickname = ev.target.flickName.value
        console.log(flickname)

    },



}
app.init('form#flick-form')