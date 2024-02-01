
let seting,seats,total,movie,Reserved,add,titeprice
 seting =document.querySelector('.seting')
 seats=document.querySelectorAll('.thisbox .sate')
  total =document.getElementById('totol')
 movie =document.getElementById('movie')
 Reserved = document.getElementById('Reserved')
 add =document.getElementById('add')
 titeprice = +movie.value

 let tmp ;
// array localstokage 
let dataresevrt;

if(localStorage.RervieMovie != null){
    dataresevrt = JSON.parse(localStorage.RervieMovie)
   
   
}else{
    dataresevrt =[]; 
}

console.log(tmp)

/////----------------------------
function updatselector() {
    const selectore = document.querySelectorAll('.thisbox .sate.selectd')
    const numberselector = +selectore.length

    console.log(numberselector)


    Reserved.value=numberselector
    total.value =numberselector * titeprice

}

// Movie add
movie.addEventListener('click', (e) =>{
    titeprice = +e.target.value;
    updatselector()
})


//------------------------------------------------
seting.addEventListener('click', (e)=>{
   
    if(e.target.classList.contains('sate') && !e.target.classList.contains('occupied')){
e.target.classList.toggle('selectd')
    }

    tmp=e
    updatselector()
})















// input Carrdt select
var Name , email,phone,movie1,reserved,ToTal
    Name =document.querySelector('.name')
    email =document.querySelector('.email')
    phone =document.querySelector('.phone')
    movie1 =document.querySelector('.movie')
    reserved =document.querySelector('.reserved')
    ToTal =document.querySelector('.ToTal')


    /// input element
    var  NAM,EM,Ph,MOV,RESRFT,TOT
        NAM=  document.getElementById('Name')
         EM  = document.getElementById('email')
          Ph  = document.getElementById('phone')
          MOV  = document.getElementById('movie')
         RESRFT =  document.getElementById('Reserved')
        TOT   = document.getElementById('totol')



//------------------------------------------------------------
 function addSeat(){
    if(NAM.value !== '' && EM.value !== '' && Ph.value !== '' && RESRFT.value !=='' && TOT.value !=='' ){
        Name.innerHTML = NAM.value //Name
        email.innerHTML = EM.value //email
        phone.innerHTML = Ph.value //phone
        movie1.innerHTML = MOV.value //movie
        reserved.innerHTML = RESRFT.value // Reserved
        ToTal.innerHTML = TOT.value +"$" //Total
        card=document.querySelector('.card').style.top='10%'
    }else{
    alert('Plaise Resrvie Movie ')
    
    }
     
    
        scrollTo({
            top: 0,
            behavior: 'smooth' // إضافة تأثير ناعم للتمرير
          });
 }




  



//------------------------------------------------------------
function confrmt(){
    
    Name.innerHTML = document.getElementById('Name').value
    email.innerHTML = document.getElementById('email').value
    phone.innerHTML = document.getElementById('phone').value
    movie1.innerHTML = document.getElementById('movie').value
    reserved.innerHTML = document.getElementById('Reserved').value
    ToTal.innerHTML = document.getElementById('totol').value+" $"

  //Data arry and Object  
let userprodect ={
name:Name.innerHTML,
email:email.innerHTML,
phone:phone.innerHTML,
film:movie1.innerHTML,
reserved:reserved.innerHTML,
total:ToTal.innerHTML

}
// data localstokage
   dataresevrt.push(userprodect)
   localStorage.setItem("RervieMovie", JSON.stringify(dataresevrt))



    let sir= document.querySelector('.sir')
    document.querySelector('.card').style.top='-100%'
    document.querySelector('.cardconfirm').style.top='10%'
    sir.innerHTML = document.getElementById('Name').value


    setTimeout(function(){location.reload()},3000)
   

}
//------------------------------------------------------------
function cancel(){
    document.querySelector('.card').style.top='-100%'
}





