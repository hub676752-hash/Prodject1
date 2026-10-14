const reg = () => {                             //Седьмая функция фиктивной регистрации
    let name = prompt("Введите логин");
    let pass= prompt("Введите пароль");

    let user = {
        name: name, 
       password: pass
    }
    localStorage.setItem("user", JSON.stringify(user));
    alert("Регистрация прошла");
}
reg();