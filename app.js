document.addEventListener('DOMContentLoaded', e =>{
 
  const ui = new Ui()
  LocalSto.displayFromLocal()
  

  ui.create.addEventListener('click', e =>{
    e.preventDefault()
     const obj = new Obj(ui.idPlus)

    if(ui.make.value ==='' || ui.model.value ==='' || ui.year.value ==='' || ui.price.value ==='' || ui.howMany.value ===''){

     ui.showMsg('error','Complete the empty fields')
     setTimeout(()=>{
       document.querySelector('.error').remove()
     },2500)

    }
    
     else{
      let rows = document.querySelectorAll('.row');
       
      rows.forEach(one =>{
        if(one.firstElementChild.textContent === ui.id.value){
          ui.showMsg('error','This product already exists')
          setTimeout(()=>{
            document.querySelector('.error').remove()
          },2500)
        }else{

      ui.createRow()
      LocalSto.addToLocal(obj)
      ui.clearFields()
        }

      })

    
    }
    
  })

  ui.tbody.addEventListener('click',e => {
    if(e.target.classList.contains('del-btn')){
      ui.deleteRow(e)
      LocalSto.deleteFromLocal(e.target)
     }

     if(e.target.classList.contains('edit-btn')){

       ui.editRow(e)
       LocalSto.editFromLocal(e)
     }


  })




  ui.form1.addEventListener('click', e => {
    e.preventDefault()
    if(e.target.classList.contains('update')){

      if(ui.make.value ==='' || ui.model.value ==='' || ui.year.value ==='' || ui.price.value ==='' || ui.howMany.value ===''){

      ui.showMsg('error','Select a row to edit')
      setTimeout(()=>{
        document.querySelector('.error').remove()
      },2500)
    }
    else{
      LocalSto.updateRow(e)
    }
  }
  })

 



 document.querySelector('.filter').addEventListener('click', e =>{

  ui.filterProducts(e)

 })

})



