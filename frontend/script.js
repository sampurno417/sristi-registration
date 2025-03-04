let totalAmount = 0;
function selectButton(button) {
    // Toggle the 'selected' class on the clicked button
    const allbutton=document.querySelector('.all-button');
    if(allbutton.classList.contains('selected')){
        allbutton.classList.remove('selected');
        totalAmount=0;
    }
    if(button.classList.contains('selected')) {
        button.classList.remove('selected');
        totalAmount-=parseInt(button.value);
    } else {
        button.classList.add('selected');
        totalAmount+=parseInt(button.value);
    }
    
    //console.log(totalAmount);
    const totalAmountElement = document.getElementById('totalAmount');
    totalAmountElement.innerHTML = totalAmount;
}

function selectAll(button){
    const totalAmountElement = document.getElementById('totalAmount');
    if(button.classList.contains('selected')){
        button.classList.remove('selected');
        totalAmountElement.innerHTML = 0;
        totalAmount=0;
    }
    else{
        button.classList.add('selected');
    const selectedButtons=document.querySelectorAll('.checkbox.selected');
    

    if(selectedButtons){
        selectedButtons.forEach(button=>{
            if(!button.classList.contains('all-button')) button.classList.remove('selected');
        });
    }
    //console.log(selectedButtons)

    
    totalAmountElement.innerHTML = 1200;
    totalAmount=1200;
    }
}

function toggleVisibility() {
    const content = document.getElementById('content');
    
    // Toggle the 'hidden' class to show/hide the content
    content.classList.toggle('hidden');
}
