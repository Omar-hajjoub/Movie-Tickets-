

let seting =document.querySelector('.seting')
let seats=document.querySelectorAll('.thisbox .sate')
let total =document.getElementById('totol')
let movie =document.getElementById('movie')
let Reserved = document.getElementById('Reserved')
let add =document.getElementById('add')

let titeprice = +movie.value
function updatselector() {
    const selectore = document.querySelectorAll('.thisbox .sate.selectd')
    const numberselector = +selectore.length

    console.log(numberselector)


    Reserved.value=numberselector
    total.value =numberselector * titeprice

}


movie.addEventListener('click', (e) =>{
    titeprice = +e.target.value;
    updatselector()
})



seting.addEventListener('click', (e)=>{
    if(e.target.classList.contains('sate') && !e.target.classList.contains('occupied')){
e.target.classList.toggle('selectd')
    }


    updatselector()
})


add.addEventListener('click', ()=>{
    var name , email,phone,movie,reserved,ToTal,card
    name =document.querySelector('.name')
    email =document.querySelector('.email')
    phone =document.querySelector('.phone')
    movie =document.querySelector('.movie')
    reserved =document.querySelector('.reserved')
    ToTal =document.querySelector('.ToTal')


    name.innerHTML = document.getElementById('Name').value
    email.innerHTML = document.getElementById('email').value
    phone.innerHTML = document.getElementById('phone').value
    movie.innerHTML = document.getElementById('movie').value
    reserved.innerHTML = document.getElementById('Reserved').value
    ToTal.innerHTML = document.getElementById('totol').value+" $"

    card=document.querySelector('.card').style.top='10%'

    scrollTo({
        top: 0,
        behavior: 'smooth' // إضافة تأثير ناعم للتمرير
      });

  
})


function confrmt(){
    let sir= document.querySelector('.sir')
    document.querySelector('.card').style.top='-100%'
    document.querySelector('.cardconfirm').style.top='10%'
    sir.innerHTML = document.getElementById('Name').value
    setTimeout(function(){location.reload()},3000)
   

}
function cancel(){
    document.querySelector('.card').style.top='-100%'
}





