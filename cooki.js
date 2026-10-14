const coki = () => {                   //Шестая функция сохранение в куки   
    let name = prompt("print name");
    let pass = prompt("print password");
    document.cookie = `${name}=${pass}; path=/;`;
}
coki();   