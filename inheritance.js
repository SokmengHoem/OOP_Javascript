class BMI {
    constructor(weight, height) {
        this.weight = weight;
        this.height = height;
    }

    get score(){
      return this.weight / (this.height * this.height);
    }
}

class BMIResult extends BMI{
    constructor(weight, height) {
        super(weight, height)
    }

    getResult(){
        if(super.score < 18.5){
            return "thin";
        }else if(super.score < 25){
            return "normal";
        }else{
            return "overweight";
        }
    }
}

let result = new BMIResult(80, 1.75);
console.log(result.score);
console.log(result.getResult())