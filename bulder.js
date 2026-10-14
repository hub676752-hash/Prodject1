 const entity_test = {     //Третья функция: вывод красивого текста
    name: 'Вася Пупкин',
    uuid:'rtd',
    appointment:'doc',
    direction:'кардиограммы',
    doc:'Петров A.C.',
    time: 16.34,
    data: 15.09
}
const holder = (entity_test) => {
    const message = {
        Пациент: entity_test.name, 
        'записан к врачу': entity_test.doc,
        'на(время)': entity_test.time,
        'для проведении': entity_test.direction,
        'Число приема': entity_test.data
    };
    return message;
};
console.log(holder(entity_test)); 