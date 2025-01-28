class Calculator{
    constructor(text){
        this.text = text;
        this.result = ''
        this.clear();
    }
    clear(){
        this.display = '';
        this.num1='';
        this.num2='';
        this.result = '';
    }
    delete(){
        this.display = this.display.slice(0,-1);
        this.proses();
    }
    deleteAll(){
        this.clear();
    }
    appendNumber(number){
        if (number === '.' && this.display.includes('.')) return ;
        this.display = this.text.innerText.toString() + number.toString();
        this.getnumber();
        if (this.num1 && this.num2){
            this.proses();
        }
        this.update();
    }
    appendOperation(operation){
        this.display = this.text.innerText.toString() + operation.toString();
        this.operation = operation;
        this.getnumber();
        this.update();
    }

    getnumber(){
        this.num1 = '';
        this.num2 = '';
        for (let i = 0; i < this.display.length; i++) {
            
            if (this.operation ==  this.display[i] ){
                this.num1 = this.num2;
                this.num2 = '';
            }
            if (this.operation !=  this.display[i]){
                this.num2 += this.display[i];
            }
        }
    }

    proses(){
        if (this.result){
            this.num1 = this.result;
        }
        
        let num1 = parseFloat(this.num1);   
        let num2 = parseFloat(this.num2);
        
        switch(this.operation){
            case '-':
                num1 -=num2
                break;
            
            case '+':
                num1 +=num2
                break;
            
            case 'x':
                num1 *=num2
                break;
            
            case '/':
                num1 /= num2
                break;
            default:
                return ;
        }
        this.result = num1.toString();
        this.num2 = ''

    }

    update(){
        this.text.innerText = this.display;
        result.innerText = this.result;
        
    }

    equal(){
        this.proses();
        this.update();
    }
}

const number = document.querySelectorAll(".number");
const operation = document.querySelectorAll(".operation");
const display = document.querySelector("#display");
const equal = document.querySelector(".equal");
const del = document.querySelector(".delete");
const delAll = document.querySelector(".delAll");
const result = document.querySelector("#result");
const num1= '';
const num2= '';

number.forEach(button=>{
    button.addEventListener('click',() =>{
        calculator.appendNumber(button.innerText);
        calculator.update();
    })
})

operation.forEach(button=>{
    button.addEventListener('click',() =>{
        calculator.appendOperation(button.innerText);
        calculator.update();
    })
})

del.addEventListener('click',() =>{
    calculator.delete();
    calculator.update();
})

delAll.addEventListener('click',() =>{
    calculator.deleteAll();
    calculator.update();
})
equal.addEventListener('click',() =>{
    calculator.equal();

})

const calculator = new Calculator(display);
