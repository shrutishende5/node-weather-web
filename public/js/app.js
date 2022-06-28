console.log('Client side javascript file is loaded!')
// fetch('http://localhost:3000/weather?address=boston').then((response)=>{
//     //console.log(response.json());
//     response.json().then(data => {
//        if(data.error){
//         console.log(data.error)
//        }else{
//            console.log(data);
//        }
//     })
// })

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message');
const messageTwo = document.querySelector('#error');
messageOne.textContent = 'From Javscript';
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const location = search.value;
    messageOne.textContent = 'Loading....';
    messageTwo.textContent = '';
    if(location.length === 0){
        messageOne.textContent = 'please enter location';
     
    }
    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
    //console.log(response.json());
    response.json().then(data => {
       if(data.error){
        messageOne.textContent= data.error 
    }else{
           messageOne.textContent= data.forecast; 
           messageTwo.textContent= data.placeName; 
          
       }
    })
})
})