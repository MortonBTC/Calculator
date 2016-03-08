/*
window.addEventListener('load', function () {
    var total = 7;
    var label = 'woah';
    // var labelOfTheThing = 'CAMELCASE';
    
    console.log(label.length);
    if (label.length === 5) {
        total = total + 3;
    }
    
    console.log ('HELLO WORLD, i have ' + total + ' things');
    console.log (label);
    
    var headline = document.getElementById ('headline');
    headline.textContent = 'omg js';
    
    var gtButton = document.getElementById('gotime');
    console.log(gtButton);
    gtButton.addEventListener('click', function() {
        var source = document.getElementById('thing');
        var destination = document.getElementById('headline');
        destination.textContent = source.value;
        console.log('clicked!!');
    });
});

window.addEventListener('load', function () {
    
    var gtButton = document.getElementById('gotime');
    
    gtButton.addEventListener('click', function () {
        
            var source = document.getElementById('thing');
            var li = document.createElement('li');
            li.textContent = source.value;
    
            var parent = document.getElementById('things')
            parent.appendChild(li);
    
                             });
    gtButton.addEventListener('click', function () {
        
            var source = document.getElementById('costs');
            var li = document.createElement('li');
            li.textContent = source.value;
    
            var parent = document.getElementById('prices')
            parent.appendChild(li);
    
                             });  
});
*/

window.addEventListener('load', function () { 
    var calculate = document.getElementById('calculator');
    
    calculate.addEventListener('click', function () { 
    
            var num1 = document.getElementById('num1');
            var num1 = parseInt(num1.value)
            var num2 = document.getElementById('num2');
            var num2 = parseInt(num2.value)
            var answer = document.getElementById('answer');
            
        
        if (document.getElementById('add').checked){
            var add = num1+num2;
            answer.textContent = add;
            console.log(add);
        }
            
        if (document.getElementById('subtract').checked){
            var subtract = num1-num2;
            answer.textContent = subtract;
            console.log(subtract);
        }
        
        if (document.getElementById('multiply').checked){
            var multiply = num1*num2;
            answer.textContent = multiply;
            console.log(multiply);
        }
        
        if (document.getElementById('divide').checked){
            var divide = num1/num2;
            answer.textContent = divide;
            console.log(divide);
        }
        
        
    
    });
});