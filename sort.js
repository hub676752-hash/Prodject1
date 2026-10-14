const Up = () => {             //Вторая функция сортировка вверх/вниз
    const arr = [2,4,6,8,1,3,5,7,9];
    return arr.sort((a,b) => a-b);
}

const Down = () => {
    const arr = [2,4,6,8,1,3,5,7,9];
    return arr.sort((a,b)=>b-a);
}

console.log(Up());
console.log(Down()); 