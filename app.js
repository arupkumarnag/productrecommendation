const myForm = document.querySelector('#my-form');
const ageInput = document.querySelector('#age');
const studentInput = document.querySelector('#student');
const incomeInput = document.querySelector('#income');
const bundleEligible = document.querySelector('.bundle');
const productIncluded = document.querySelector('.products');
const msg = document.querySelector('.msg');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {

    e.preventDefault();

    if(ageInput.value < 18 || ageInput.value > 0) 
    {
        bundleEligible.innerHTML = 'Eligible for Junior Saver Bundle.';
        productIncluded.innerHTML = 'Product Included- Junior Saver Account.'
    }

    if(ageInput.value > 17 && studentInput.value === 'Yes') 
    {
        bundleEligible.innerHTML = 'Eligible for Student Bundle.';
        productIncluded.innerHTML = 'Products Included- Student Account, Debit Card & Credit Card.'
        msg.innerHTML = 'You are not eligible for Credit Card.';
    }

    if(ageInput.value > 17 && incomeInput.value > 0) 
    {
        bundleEligible.innerHTML = 'Eligible for Classic Bundle.';
        productIncluded.innerHTML = 'Products Included- Current Account & Debit Card.'
    }

    if(ageInput.value > 17 && incomeInput.value > 12000) 
    {
        bundleEligible.innerHTML = 'Eligible for Classic Plus Bundle.';
        productIncluded.innerHTML = 'Products Included- Current Account, Debit Card & Credit Card.'
    } 

    if(ageInput.value > 17 && incomeInput.value >= 40000) 
    {
        bundleEligible.innerHTML = 'Eligible for Gold Bundle.';
        productIncluded.innerHTML = 'Products Included- Current Account Plus, Debit Card, Credit Card & Gold Credit Card.'
    }    

    if(incomeInput.value > 12000 && ageInput.value > 17) 
    {
        msg.innerHTML = 'You are also eligible for Credit Card';
    } 

    if(incomeInput.value > 40000 && ageInput.value > 17) 
    {
        msg.innerHTML = 'You are also eligible for Gold Credit Card';
    } 
}






