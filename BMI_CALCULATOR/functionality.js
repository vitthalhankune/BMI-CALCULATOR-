const form=document.querySelector('form');
//this usecase will gives us empty if we perform operation on height and weight out side the addEventListener Function
//const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
    //to stop default action of form after click on submit button.
    e.preventDefault();

    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const results=document.querySelector('#results');
    const anlysis =document.querySelector('#anlysis');

    if(height===''||height<0||isNaN(height)){
        results.innerHTML=`pleasse give a valid height ${height}`;
    }else if(weight===''||weight<0||isNaN(weight)){
        results.innerHTML=`please give a valid weight ${weight}`;
    }else{
        const bmi=(weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        results.innerHTML=`<span>${bmi}</span>`

        

        if(bmi>0||bmi<18.6){
            anlysis.innerHTML="You are under weight...!"
        }
        if(bmi>=18.6||bmi<=24.9){
            anlysis.innerHTML="You are in normal weight...!"
        }if(bmi>24.9){
            anlysis.innerHTML="You are over weight...!"
        }
    }


    
});