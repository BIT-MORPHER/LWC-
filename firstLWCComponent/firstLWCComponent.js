import { LightningElement, track } from 'lwc';

export default class FirstLWCComponent extends LightningElement {
    @track firstNumber='';
    @track secondNumber='';
    @track result='';
   
    takefirstinput(event){
        this.firstNumber=event.target.value;
    }

    takesecondinput(event){
        this.secondNumber=event.target.value;
    }

    add(){
        this.result=parseInt(this.firstNumber)+parseInt(this.secondNumber);
        this.clearinput();
    }

    subtract(){
        this.result=parseInt(this.firstNumber)-parseInt(this.secondNumber);
        this.clearinput();
    }
    
    multiply(){
        this.result=parseInt(this.firstNumber)*parseInt(this.secondNumber);
        this.clearinput();
    }

    divide(){
        if(parseInt(this.secondNumber)==0){
            this.result='Invalid divisor';
            this.clearinput();
        }
        else{
            this.result= this.result=parseInt(this.firstNumber)/parseInt(this.secondNumber);
            this.clearinput();
        }
    }

    clearinput(){
        this.firstNumber='';
        this.secondNumber='';
    }
}