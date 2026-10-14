const key = () => {          //Пятая функция создание рандомного uuid
    const a = true;
    const b = false
    if(a === true ){
        return crypto.randomUUID();
    }
    else {
        return "Пользователь не авторизован"
    }
}

console.log(key());  