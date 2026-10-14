const a = (b) => {         //Первая функция: наполнение массива

const arr = [];

for (let i = 0; i<b; i++){
arr.push(Math.floor(Math.random() * 100));
} 
return arr;
}
console.log(a(10)); 
