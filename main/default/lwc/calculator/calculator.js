import { LightningElement } from 'lwc';

export default class calculator extends LightningElement {
    firstOperand = " ";
    secondOperand = " ";
    operator = " ";
    _result;

    handleOperand(event){
        if (this.firstOperand == " " && this.operator==" "){
            this.firstOperand = event.target.value.trim();
        } else if (this.secondOperand == " " && this.operator == " ") {
            this.firstOperand = this.firstOperand.trim() + event.target.value.trim();
        } else if (this.firstOperand != " " && this.operator != " " && this.secondOperand == " ") {
            this.secondOperand = event.target.value;
        } else if (this.firstOperand != " " && this.operator != " " && this.secondOperand != " ") {
            this.secondOperand = this.secondOperand.trim() + event.target.value.trim();
        }
        console.log(this.firstOperand);
        console.log(this.secondOperand);
    }

    handleOperator(event){
        this.operator = event.target.value;
        console.log(this.operator);
    }

    handleOperation(event){
        if (this.firstOperand != " " && this.operator != " " && this.secondOperand != " "){
            if(this.operator == "+"){
                console.log((+this.firstOperand) + (+this.secondOperand));
            } else if (this.operator == "-"){
                console.log((+this.firstOperand) - (+this.secondOperand));
            } else if (this.operator == "/") {
                console.log((+this.firstOperand) / (+this.secondOperand));
            } else if (this.operator == "*") {
                console.log((+this.firstOperand) * (+this.secondOperand));
            }
        }else{
            console.log("Por favor, ingrese valores");
        }
        this.firstOperand = " ";
        this.secondOperand = " ";
        this.operator = " ";
    }

    
/*
    handleFirstOperand(event) {
        this.firstOperand = event.detail.value;
        this.emitEvent();
    }
    handleSecondOperand(event) {
        this.secondOperand = event.detail.value;
        this.emitEvent();
    }

    get isValid() {
        return this.firstOperand && this.secondOperand;
    }

    get result() {
        if (this.isValid) {
            return +this.firstOperand + +this.secondOperand;
        }
        return 'Llena los campos';
    }

    emitEvent() {
        if (this.isValid) {
            this.dispatchEvent(
                new CustomEvent('notify', {
                    detail: this.result
                })
            );
        }
    }*/
}