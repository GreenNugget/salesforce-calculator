import { LightningElement } from 'lwc';

export default class calculator extends LightningElement {
    firstOperand = " ";
    secondOperand = " ";
    operator = " ";
    operation = " ";
    _result = 0;

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
        this.operation = this.firstOperand + this.operator + this.secondOperand;
    }

    handleOperator(event){
        if(this.operator == " "){
            this.operator = event.target.value;
            console.log(this.operator);
        }else{
            this.firstOperand = " ";
            this.secondOperand = " ";
            this.operator = " ";
            this.operation = "ERROR: 2 operators in a row!!";
        }
        this.operation = this.operation.trim() + this.operator;
    }

    handleOperation(){
        if (this.firstOperand != " " && this.operator != " " && this.secondOperand != " "){
            if(this.operator == "+"){
                this._result = (+this.firstOperand) + (+this.secondOperand);
            } else if (this.operator == "-"){
                this._result = (+this.firstOperand) - (+this.secondOperand);
            } else if (this.operator == "/") {
                this._result = (+this.firstOperand) / (+this.secondOperand);
            } else if (this.operator == "*") {
                this._result = (+this.firstOperand) * (+this.secondOperand);
            }

            this.operation = this._result;

        }else{
            this.operation = "Push the buttons first!";
        }

        this.firstOperand = " ";
        this.secondOperand = " ";
        this.operator = " ";
    }

    cleanOperation(){
        this.firstOperand = " ";
        this.secondOperand = " ";
        this.operator = " ";
        this.operation = " ";
    }

}