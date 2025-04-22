
const buttons = document.querySelectorAll('.btn');

const artButton = document.getElementById('art');
const cinemaButton = document.getElementById('cinema');
const literatureButton = document.getElementById('literature');
const theatreButton = document.getElementById('theatre');
const musicButton = document.getElementById('music');
const scienseButton = document.getElementById('sciense');
const posterSliderScience = document.querySelector('.poster-slider');
let yearStart = document.getElementById('start');
let yearEnd = document.getElementById('end');
const example = document.querySelector('.example');
const posterSliderWrapper = document.querySelector('.poster-slider__wrapper');

const sliderTitle1 = posterSliderWrapper.children[0].firstElementChild;
const sliderTitle2 = posterSliderWrapper.children[1].firstElementChild;
const sliderTitle3 = posterSliderWrapper.children[2].firstElementChild;
const sliderTitle4 = posterSliderWrapper.children[3].firstElementChild;
const sliderTitle5 = posterSliderWrapper.children[4].firstElementChild;
const sliderTitle6 = posterSliderWrapper.children[5].firstElementChild;
const sliderTitle7 = posterSliderWrapper.children[6].firstElementChild;
const sliderTitle8 = posterSliderWrapper.children[7].firstElementChild;

const circle = document.querySelector('.circle');
const container = document.querySelector('.container');

const sliderText1 = posterSliderWrapper.children[0].lastElementChild;
const sliderText2 = posterSliderWrapper.children[1].lastElementChild;
const sliderText3 = posterSliderWrapper.children[2].lastElementChild;
const sliderText4 = posterSliderWrapper.children[3].lastElementChild;
const sliderText5 = posterSliderWrapper.children[4].lastElementChild;
const sliderText6 = posterSliderWrapper.children[5].lastElementChild;
const sliderText7 = posterSliderWrapper.children[6].lastElementChild;
const sliderText8 = posterSliderWrapper.children[7].lastElementChild;


artButton.addEventListener('click', () => {
    artButton.textContent = 'Искусство';

    yearStart.textContent = '2011';
    yearEnd.textContent = '2014';

    cinemaButton.textContent = '2';
    literatureButton.textContent = "3";
    theatreButton.textContent = "4";
    musicButton.textContent = "5";
    scienseButton.textContent = "6";

    sliderTitle1.textContent = '2011';
    sliderTitle2.textContent = '2012';
    sliderTitle3.textContent = '2013';
    sliderTitle4.textContent = '2014';
    sliderTitle5.textContent = '';
    sliderTitle6.textContent = '';
    sliderTitle7.textContent = '';
    sliderTitle8.textContent = '';

    sliderText1.textContent = 'Пушкинский музей установил рекорд года по посещаемости – 300 тысяч человек.';
    sliderText2.textContent = 'Главная сделка на арт-рынке в уходящем году — покупка американским миллиардером Леоном Блэком «Крика» Эдварда Мунка на аукционе Sotheby’s за $119 922 600. и';
    sliderText3.textContent = 'В ноябре на торгах аукционного дома Christie’s в Нью-Йорке за рекордные $142 млн был продан триптих Фрэнсиса Бэкона. На полотне «Три наброска к портрету Люсьена Фрейда», написанном в 1969 году, изображен друг Бэкона. Картина выставлялась на аукцион впервые.';
    sliderText4.textContent = 'в пространстве Ватикана проводится выставка макетов, планов, кинетических скульптур и инсталляций, созданных одним из выдающихся архитекторов ХХ-ХХI веков - испанца Сантьяго Калатравы'
    sliderText5.textContent = '';
    sliderText6.textContent = '';
    sliderText7.textContent = '';
    sliderText8.textContent = ''
}
);

cinemaButton.addEventListener('click', () => {
    cinemaButton.textContent = 'Кино';
    yearStart.textContent = '1987';
    yearEnd.textContent = '1991';
    artButton.textContent = "1";
    literatureButton.textContent = "3";
    theatreButton.textContent = "4";
    musicButton.textContent = "5";
    scienseButton.textContent = "6";

    sliderTitle1.textContent = '1987';
    sliderTitle2.textContent = '1988';
    sliderTitle3.textContent = '1989';
    sliderTitle4.textContent = '1990';
    sliderTitle5.textContent = '1991';
    sliderTitle6.textContent = '';
    sliderTitle7.textContent = '';
    sliderTitle8.textContent = '';

    sliderText1.textContent = '"Хищник"/ Preadator, США (реж. Джон Мактирнан)';
    sliderText2.textContent = '"Кто подставил кролика Роджера"/ Who Framed Roger Rabbit, США (реж. Роберт Земекис';
    sliderText3.textContent = '"Назад в будущее 2"/ Back To The Future 2, США (реж. Роберт Земекис)';
    sliderText4.textContent = '"Крепкий орешек 2"/ Die Hard 2, США (реж. Ренни Харлин)"'
    sliderText5.textContent = '"Семейка Адамс"/ The Adams Family, США (реж. Барри Зонненфельд)';
    sliderText6.textContent = '';
    sliderText7.textContent = '';
    sliderText8.textContent = '';
},

);


literatureButton.addEventListener('click', () => {
    literatureButton.textContent = 'Литература';
    yearStart.textContent = '1992';
    yearEnd.textContent = '1997';
    artButton.textContent = "1";
    cinemaButton.textContent = '2';
    theatreButton.textContent = "4";
    musicButton.textContent = "5";
    scienseButton.textContent = "6";

    sliderTitle1.textContent = '1992';
    sliderTitle2.textContent = '1994';
    sliderTitle3.textContent = '1995';
    sliderTitle4.textContent = '1997';
    sliderTitle5.textContent = '1997';
    sliderTitle6.textContent = '';
    sliderTitle7.textContent = '';
    sliderTitle8.textContent = '';

    sliderText1.textContent = 'Нобелевская премия по литературе - Дерек Уолкотт, "За блестящий образец карибского эпоса в 64 разделах".';
    sliderText2.textContent = '"Бессоница" - роман Стивена Кинга';
    sliderText3.textContent = 'Нобелевская премия по литературе - Шеймас Хини';
    sliderText4.textContent = '"Крепкий орешек 2"/ Die Hard 2, США (реж. Ренни Харлин)"'
    sliderText5.textContent = '"Семейка Адамс"/ The Adams Family, США (реж. Барри Зонненфельд)';
    sliderText6.textContent = '';
    sliderText7.textContent = '';
    sliderText8.textContent = ''
},


);

theatreButton.addEventListener('click', () => {
    theatreButton.textContent = 'Театр';
    yearStart.textContent = '1999';
    yearEnd.textContent = '2004';
    artButton.textContent = "1";
    cinemaButton.textContent = '2';
    literatureButton.textContent = "3";
    musicButton.textContent = "5";
    scienseButton.textContent = "6";

    sliderTitle1.textContent = '1999';
    sliderTitle2.textContent = '2000';
    sliderTitle3.textContent = '2001';
    sliderTitle4.textContent = '2002';
    sliderTitle5.textContent = '2003';
    sliderTitle6.textContent = '2004';
    sliderTitle7.textContent = '';
    sliderTitle8.textContent = '';

    sliderText1.textContent = 'Премьера балета "Золушка" в постановке Жан-Кристофа Майо всценограйии Эрнеста Пиньона';
    sliderText2.textContent = 'Возобновление издания журнала "Театр"';
    sliderText3.textContent = 'Основан театр "АRТиШОК"'
    sliderText4.textContent = 'Премьера трилогии Тома Стоппарда "Берег Утопии", Королевский Национальный театр, Лондон';
    sliderText5.textContent = '"Крепкий орешек 2"/ Die Hard 2, США (реж. Ренни Харлин)"';
    sliderText6.textContent = '"Семейка Адамс"/ The Adams Family, США (реж. Барри Зонненфельд)';
    sliderText7.textContent = '';
    sliderText8.textContent = ''

}
);

musicButton.addEventListener('click', () => {
    musicButton.textContent = 'Музыка';
    yearStart.textContent = '2005';
    yearEnd.textContent = '2010';
    artButton.textContent = "1";
    cinemaButton.textContent = '2';
    literatureButton.textContent = "3";
    theatreButton.textContent = "4";
    scienseButton.textContent = "6";

    sliderTitle1.textContent = '2005';
    sliderTitle2.textContent = '2006';
    sliderTitle3.textContent = '2007';
    sliderTitle4.textContent = '2008';
    sliderTitle5.textContent = '2009';
    sliderTitle6.textContent = '2010';
    sliderTitle7.textContent = '';
    sliderTitle8.textContent = '';

    sliderText1.textContent = 'В Дублине был установлен памятник бас-гитаристу «Thin Lizzy» Филу Лайнотту.';
    sliderText2.textContent = 'на конкурсе песни Евровидение-2006 победила рок-группа Lordi с песней Hard Rock Hallelujah, выступавшая в сценических костюмах монстров.';
    sliderText3.textContent = 'Триумфальное возвращение на сцену поп-принцессы Бритни Спирс, в сентябре на церемонии MTV Video Music Awards 2007. Спирс выступила с песней «Gimme More» из нового альбома Blackout.'
    sliderText4.textContent = '19 августа Леди Гага выпустила свой первый студийный альбом The Fame';
    sliderText5.textContent = '5 мая 2009 Eminem выпускает альбом Relapse';
    sliderText6.textContent = 'В Крокус Сити Холле состоялось вручение первой российской хип-хоп премии Russian Street Awards 2010';
    sliderText7.textContent = '';
    sliderText8.textContent = ''

}
);

scienseButton.addEventListener('click', () => {
    scienseButton.textContent = 'Наука';
    yearStart.textContent = '2015';
    yearEnd.textContent = '2022';
    musicButton.textContent = 'Музыка';
    musicButton.classList.add('.active');
    artButton.textContent = "1";
    cinemaButton.textContent = '2';
    literatureButton.textContent = "3";
    theatreButton.textContent = "4";
    musicButton.textContent = "5";
    posterSliderScience.style = " ";

    sliderTitle1.textContent = '2015';
    sliderTitle2.textContent = '2016';
    sliderTitle3.textContent = '2017';
    sliderTitle4.textContent = '2018';
    sliderTitle5.textContent = '2019';
    sliderTitle6.textContent = '2020';
    sliderTitle7.textContent = '2021';
    sliderTitle8.textContent = '2022';

    sliderText1.textContent = '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды';
    sliderText2.textContent = 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11';
    sliderText3.textContent = ' Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi'
    sliderText4.textContent = 'Старт космического аппарата Solar Probe Plus, предназначенного для изучения Солнца';
    sliderText5.textContent = 'Google объявил о создании 53-кубитного квантового компьютера';
    sliderText6.textContent = 'В Крокус Сити Холле состоялось вручение первой российской хип-хоп премии Russian Street Awards 2010';

    sliderText7.textContent = 'Создание вакцины от короновируса ("Covid - 19")';
    sliderText8.textContent = 'Старт научной работы орбитального телескопа "James Webb"'
}
);


let myTextSlider = new Swiper('.poster-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    grabCursor: true,
    slideToClickedSlide: true,



    mousewheel: {
        sensitivity: 1,
        EventTarget: '.poster-slider',
    },
    autoHeight: true,
    slidesPerView: 3.5,
    watchOverflow: true,
    spaceBetween: 20,



    breakpoints: {
        '@0.25': {
            slidesPerView: 1,
        },
        '@0.50': {
            slidesPerView: 2,
        },
        '@0.75': {
            slidesPerView: 2,
        },
        '@1.00': {
            slidesPerView: 3,

        },
        '@1.50': {
            slidesPerView: 4,
        }
    },

});
