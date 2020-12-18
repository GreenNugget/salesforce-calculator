import { LightningElement } from 'lwc';

export default class calculator extends LightningElement {
    firstOperand = " ";
    secondOperand = " ";
    operator = " ";

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
        if(this.operator == " "){
            this.operator = event.target.value;
            console.log(this.operator);
        }else{
            this.firstOperand = " ";
            this.secondOperand = " ";
            this.operator = " ";
            console.log("ERROR!, no pueden haber 2 operadores seguidos!!");
        }
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

    cleanOperation(){
        this.firstOperand = " ";
        this.secondOperand = " ";
        this.operator = " ";
    }

}