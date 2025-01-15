const calc = {
    plus: function(a, b) {console.log(a+b);},
    minus: function(a, b) {console.log(a + "-" + b + "=" + (a-b));},
    multiplied: function(a, b) {console.log(`${a}*${b}=${a*b}`);},
    divided: function(a, b) {console.log(`${a}와 ${b}를 나눈 값은 ${a/b}입니다.`);},
    powerOf: function(a,b) {console.log(a**b);},
};

calc.plus(10,2);
calc.minus(10,2);
calc.multiplied(10,2);
calc.divided(10,2);
calc.powerOf(10,2);

console.log("######################");

const calc1 = {
    plus: function(a, b) {return a+b},
    minus: function(a, b) {return a-b},
    multiplied: function(a, b) {return a*b},
    divided: function(a, b) {return a/b},
    powerOf: function(a,b) {return a**b},
};

console.log(calc1.plus(10,2));
console.log(calc1.minus(10,2));
console.log(calc1.multiplied(10,2));
console.log(calc1.divided(10,2));
console.log(calc1.powerOf(10,2));

console.log("######################");

const age = 100;
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);