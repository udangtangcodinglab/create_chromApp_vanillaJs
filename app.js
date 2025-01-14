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