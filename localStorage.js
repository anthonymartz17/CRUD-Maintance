// const object = new Obj()


class LocalSto{
  
static checkLocal(){
  let local;
  if(localStorage.getItem('localDealer') === null){
    local = [];

  }else{
    local = JSON.parse(localStorage.getItem('localDealer'))
  }

  return local
}

static addToLocal(obj){
 let localArray = LocalSto.checkLocal()

 localArray.push(obj)

 localStorage.setItem('localDealer', JSON.stringify(localArray))

}

static displayFromLocal(){
  let localArray = LocalSto.checkLocal()

  localArray.forEach(one =>{

    let row = document.createElement('tr')
    row.classList.add('row')
    row.innerHTML = `
            <td>${one.id}</td>
            <td>${one.make.toUpperCase()}</td>
            <td>${one.model.toUpperCase()}</td>
            <td>${one.year}</td>
            <td> ${formatter.format(one.price)}</td>
            <td>${one.howMany}</td>     
            <td>
                <i class="edit-btn far fa-edit"></i>
  
                <i class="del-btn far fa-trash-alt"></i>
            </td>
    
    `
    ui.tbody.appendChild(row)
  })
  localStorage.setItem('localDealer', JSON.stringify(localArray))

}

static deleteFromLocal(target){
  
  let targetId = target.parentElement.parentElement.firstElementChild.textContent;
  
  let localArray = LocalSto.checkLocal()
  localArray.forEach((one,index) =>{
    if(one.id == targetId){
  
      localArray.splice(index,1)
    }
  })


  localStorage.setItem('localDealer', JSON.stringify(localArray))
}


static editFromLocal(e){

let targetId =  e.target.parentElement.parentElement.firstElementChild.textContent

// console.log(targetId)
let localArray = LocalSto.checkLocal()
let id = document.querySelector('.id');
let make = document.querySelector('.make');
let model = document.querySelector('.model');
let year = document.querySelector('.year');
let price = document.querySelector('.price');
let inStock = document.querySelector('.how-many');



localArray.forEach(one =>{
  if(one.id == targetId){
id.value = one.id
make.value = one.make
model.value = one.model
year.value = one.year
price.value = one.price
inStock.value = one.howMany

// let ID = document.querySelector('.dynamicInput')
//  if(ID){
//     ID.remove()
//     // ui.createDivForId(one.id)

//  }else{
//    ui.createDivForId(one.id)
// }
  }
})

}

static updateRow(){
  // let updateID = document.querySelector('.dynamicInput')
  const objUpdate = new Obj()
  
    let localArray = LocalSto.checkLocal()

  localArray.forEach((one,index) =>{
    if(one.id == id.value){
      localArray.splice(index,1,objUpdate)
    }
  })

  localStorage.setItem('localDealer', JSON.stringify(localArray))
  location.reload()
  
}








}

