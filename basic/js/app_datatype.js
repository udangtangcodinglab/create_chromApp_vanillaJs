const age = prompt("나이를 입력해주세요."); // string 
const age1 = parseInt(prompt("나이를 입력해주세요.")); // number

// # 데이터형 확인
console.log(typeof age);
console.log(typeof age1);

// ----------------------------------------------------

// # 데이터형 변환
console.log(age, parseInt(age));
// parseInt(age) 값에 숫자와 다른 문자가 들어오면 NaN
//  경우1 ) age = "123"일 때, parseInt(age) = 123(number)
//  경우2 ) age = "lalala"일 때, parseInt(age) = NaN

// ----------------------------------------------------

// # NaN 데이터 존재여부 확인
console.log(isNaN(age));