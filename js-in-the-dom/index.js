
//hide and show subscribe form when X/+ is clicked

const formBtn = getElementById('close-form')

const form = querySelection('.form')

function toggler() {
    formBtn.innerText==='X' ? formBtn.innerText= '+' : formBtn.innerText= 'X';
   
    form.classList.toggle()
}


formBtn.addEventListener('click', toggler() )



//basic form validation and styling so that an empty form won't be sent


const nameInput = querySelection('name')

const emailInput = querySelection('email')

const emailList =[]

function validateForm (){
    if (nameInput.value && emailInput.value===false){
        alert('you must enter a name and an email address to subscribe!')
            nameInput.style.borderStyle = "2px solid red"; 
            emailInput.style.borderStyle = "2px solid red" ; 
    }
    else if (emailInput.value===false){
       alert('please enter an email address to subscribe')
       emailInput.style.borderStyle = "2px solid red" ;
    }
    else if ( nameInput===false){
        alert('please enter a name to subscribe')
        nameInput.style.borderStyle = "2px solid red";
    }
    else {
        emailList.push(nameInput.value,emailInput.value)
        displayThankYou()
    }

}

form.addEventListener('submit',function(event) {
    event.preventDefault()
})


//Thank You Message

const formContainer = querySelection('.form-container')

    function displayThankYou(){
        formContainer.innerText= 'Thank you for subscribing!';
        setTimeout()
    }




    


//Removing Red Border

function borderRemove() {this.style.borderStyle = "none"}



nameInput.addEventListener('change',borderRemove)
emailInput.addEventListener('change',borderRemove)





// display a cart counter that increments on button clicks

const addCart = document.querySelection('.product-card')

function cartPlus1() {



}

addCart.addEventListener('click', cartPlus1)  

