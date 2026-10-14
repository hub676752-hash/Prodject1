const reg = () => {                             //Седьмая функция делает фиктивную регистацию
    let name = prompt("Введите логин");
    let pass= prompt("Введите пароль");

    let user = {
        name: name, 
       password: pass
    }
    localStorage.setItem("user", JSON.stringify(user));
    alert("Регистрация прошла");
    return true;
}

    const key = (key1) => {          //Пятая функция делает рандом uuid
    if(key1 === true ){
        return crypto.randomUUID();
    }
    else {
        return "Пользователь не авторизован"
    }
}
        const coki = (cooki) => {                   //Шестая функция регистрирует куки по uuid    
    document.cookie = `userKey=${cooki}; path=/;`;
        }
let registr = reg();
let keY = key(registr);
alert("Сген ключ " + keY);
coki(keY);