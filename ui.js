
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})

class Ui{
  constructor(){
    this.create = document.querySelector('.create')
    this.update = document.querySelector('.update')
    this.tbody = document.querySelector('.tbody')
    this.container = document.querySelector('.container')
    this.nameOfStore = document.querySelector('.store-name')
    this.inputContainer = document.querySelector('.input-container')
    this.form1 = document.querySelector('.form-inputs')
    this.id = document.querySelector('.id')
    this.idPlus = 1
    this.make = document.querySelector('.make');
    this.model = document.querySelector('.model');
    this.year = document.querySelector('.year');
    this.price = document.querySelector('.price');
    this.howMany = document.querySelector('.how-many');
    this.filterMake = document.querySelector('.make-filter')
    this.filterModel = document.querySelector('.model-filter')
    this.filterYear = document.querySelector('.year-filter')
    this.filterPrice = document.querySelector('.price-filter')
    this.filterMake = document.querySelector('.make-filter')

  }
  generateIdPlus(){
   return this.idPlus++
  }
  // * generateCode() {
  //   let indice = 1;
  //   while(true)
  //     yield indice++;
  // }
  // * generateCodeForUi() {
  //   let indice = 1;
  //   while(true)
  //     yield indice++;
  // }

  calcInstock(){
    let startValue = 0;
    return startValue+= parseInt(this.howMany.value)
  } 

  createRow(){
    
    let row = document.createElement('tr')
    row.classList.add('row')
    row.innerHTML = `
            <td>${this.id.value}</td>
            <td>${this.make.value.toUpperCase()}</td>
            <td>${this.model.value.toUpperCase()}</td>
            <td>${this.year.value}</td>
            <td>${formatter.format(this.price.value)}</td>
            <td>${this.calcInstock()}</td>     
            <td>
                <i class="edit-btn far fa-edit"></i>
  
                <i class="del-btn far fa-trash-alt"></i>
            </td>
    
    `
    this.tbody.appendChild(row)
  
  }

  showMsg(className,msg){
    let msgDiv = document.createElement('div')
    msgDiv.classList.add(className)
    msgDiv.textContent = msg;
    this.container.insertBefore(msgDiv,this.nameOfStore)
  }

  clearFields(){
    document.querySelectorAll('.input-field').forEach(one =>{
      one.value = '';
    })
  }


  deleteRow(e){
  
     e.target.parentElement.parentElement.remove()

    
    
  }

  editRow(e){   

  
      let eId =  e.target.parentElement.parentElement.firstElementChild.textContent

      let eMake = e.target.parentElement.parentElement.firstElementChild.nextElementSibling.textContent
      let eModel = e.target.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.textContent
      let eYear = e.target.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.textContent
      let ePrice = e.target.parentElement.parentElement.lastElementChild.previousElementSibling.previousElementSibling.textContent
      let ehowMany = e.target.parentElement.parentElement.lastElementChild.previousElementSibling.textContent

    
     
    let id = document.querySelector('.id');
    let make = document.querySelector('.make');
    let model = document.querySelector('.model');
    let year = document.querySelector('.year');
    let price = document.querySelector('.price');
    let inStock = document.querySelector('.how-many');
    
    id.value = eId
    make.value = eMake
    model.value = eModel
    year.value = eYear
    // price.value = this.removeCurrencyFormat(ePrice)
    inStock.value = ehowMany


  //   let ID = document.querySelector('.dynamicInput')
  //    if(ID){
  //       ID.remove()
  //       this.createDivForId(eId)

  //    }else{
  //      this.createDivForId(eId)
  //  }
  
    

  }

      

  // createDivForId(eId){
  //   let makeWrapper = document.querySelector('.make-wrapper')
  //   let input = document.createElement('input');
  //   input.classList.add('dynamicInput')
  //   input.setAttribute('type','text')
  //   input.setAttribute('disabled',true)
  //   input.value = eId
  //   this.inputContainer.insertBefore(input,makeWrapper)
  // }


  filterProducts(){
    document.querySelectorAll('.row').forEach(one =>{
      let make = one.firstElementChild.nextElementSibling.textContent
      let model = one.firstElementChild.nextElementSibling.nextElementSibling.textContent

      one.style.visibility ='hidden'

      if (this.filterMake.value.toUpperCase() === make){
        one.style.visibility='visible'
        
      }
      
      if (this.filterModel.value.toUpperCase() === model){
        one.style.visibility='visible'
        
      }
      
    else {
         this.showMsg('error','Item not in Stock')
         setTimeout(()=>{
          document.querySelector('.error').remove()
          location.reload()
        },2500)
      }


    })
  }






}




