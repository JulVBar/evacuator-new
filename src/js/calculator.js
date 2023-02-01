
function calculate() {
    const result = document.querySelector('.calculating__result span'),
    calculatingCheckboxs = document.querySelectorAll('.calculating__checkbox'),
    ditchBox = document.getElementById('ditch'),
    steerBox = document.getElementById('steer'),
    preoderBox = document.getElementById('preoder'),
    minus = document.getElementById('minus'),
    plus = document.getElementById('plus'),
    wheelnumber = document.getElementById('wheelnumber');

    let tarif, km, time, fix, priceForKm,
        ditch,
        steer,
        preoder,
        wheel = 0;

    if (localStorage.getItem('time')) {
        time = localStorage.getItem('time');
    } else {
        time = 'day';
        localStorage.setItem('time', 'day');
    }

    if (localStorage.getItem('tarif')) {
        tarif = localStorage.getItem('tarif');
    } else {
        tarif = 2;
        localStorage.setItem('tarif', 2);
    }

    if (localStorage.getItem('fix')) {
        fix = localStorage.getItem('fix');
    } else {
        fix = 2000;
        localStorage.setItem('fix', 2000);
    }

    if (localStorage.getItem('priceForKm')) {
        priceForKm = localStorage.getItem('priceForKm');
    } else {
        priceForKm = 50;
        localStorage.setItem('priceForKm', 50);
    }


    function calcTotal() {
        //проверяем заполнены ли все данные
        //если у нас нет хотя бы одного значения
        if (!tarif || !time || !km || !fix || !priceForKm) {
            result.textContent = '0';
            return; // прерывает функцию досрочно
        }

        
        ditchBox.checked ? ditch = 500 : ditch = 0;
        steerBox.checked ? steer = 500 : steer = 0;
        preoderBox.checked ? preoder = 0.9 : preoder = 1;

        let timeCoe;
        if (time === "day") {
            timeCoe = 0;
        } else {
            timeCoe = 500;
        }
        result.textContent = Math.round(timeCoe + (+fix) + (+priceForKm) * km * preoder + ditch + steer + (wheel * 500));
    }

    calcTotal();

    //подвязка значений калька к локал стороджу (активные классы)

    function initLocalSettings(selector, activeClass) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(elem => {
            elem.classList.remove(activeClass); // удаляем активный класс
            //обращаемся к его аттрибуту
            if (elem.getAttribute('id') === localStorage.getItem('time')) {
                elem.classList.add(activeClass);
            }
            if (elem.getAttribute('data-tarif') === localStorage.getItem('tarif')) {
                elem.classList.add(activeClass);
            }
        });
    }
    //'#id div' - выбираем дивы из блока с айди #id - это селектор(там внутри 2 дива)

    initLocalSettings('#daynight div', 'calculating__choose-item_active');
    initLocalSettings('.calculating__choose li', 'calculating__choose-item_active');

    function getStaticInformation(selector, activeClass) {
        //получаем все эелементы внутри родителя-блока
        const elements = document.querySelectorAll(selector);
        // отслеживать клики по всем дивам
        //вешаем обработчик на каждый элемент, чтобы
        //избежать бага кликов на подложку
        elements.forEach(elem => {
            elem.addEventListener('click', (e) => {
                //выбираем плашку в зависимости от наличия аттрибута (1 или 3)
                //если у клинутого эл есть такой аттрибут:
                if (e.target.getAttribute('data-tarif')) {
                    //вытаскивает ту цифру которая указана в аттрибуте(коэффциент)
                    tarif = +e.target.getAttribute('data-tarif');
                    fix = +e.target.getAttribute('data-fix');
                    priceForKm = +e.target.getAttribute('data-price');
                    
                    //запоминает "тыкнутые" данные в Л.С.
                    localStorage.setItem('tarif', +e.target.getAttribute('data-tarif'));
                    localStorage.setItem('fix', +e.target.getAttribute('data-fix'));
                    localStorage.setItem('priceForKm', +e.target.getAttribute('data-price'));
                    
                } else {
                    time = e.target.getAttribute('id');
                    localStorage.setItem('time', e.target.getAttribute('id'));
                }

                //убираем класс активности у всех эл и добавляем нужному
                elements.forEach(elem => {
                    elem.classList.remove(activeClass);
                });
                e.target.classList.add(activeClass);

                calcTotal(); //вызываем для динамического пересчета при смене аргумента
            });
        });
    }

    getStaticInformation('#daynight div', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose li', 'calculating__choose-item_active');

    function getKilometrs() {
        const input = document.querySelector('#kilo');

        input.addEventListener('input', () => {
            //если вводит неправильное значение подсвечиваем
            if (input.value.match(/\D/g) || input.value.length === 0) {
                input.style.border = '1px solid red';
            } else {
                input.style.border = 'none';
            }
            km = +input.value;
            calcTotal(); //вызываем для динамического пересчета при смене аргумента
        });
    }

    getKilometrs();

    calculatingCheckboxs.forEach(item => {
        item.addEventListener('click', () => {
            calcTotal();
        });
    });

    plus.addEventListener('click', () => {
        wheel++;
        if (wheel > 20) {
            wheel = 20;
        }
        wheelnumber.textContent = wheel;
        calcTotal();
    });

    minus.addEventListener('click', () => {
        wheel--;
        if (wheel < 0) {
            wheel = 0;
        }
        wheelnumber.textContent = wheel;
        calcTotal();
    });

    
    

}

export default calculate;


    