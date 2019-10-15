let fullOutsource = document.getElementById('full'),
    f_lvl = document.getElementById('1st-lvl'),
    s_lvl = document.getElementById('2nd-lvl'),
    select_service_time_8_5 = document.getElementById('select-service-8-5'),
    select_service_time_12_5 = document.getElementById('select-service-12-5'),
    select_service_time_24_7 = document.getElementById('select-service-24-7'),

    more_option_logist = document.getElementById('more-option-logist'),
    more_option_fond = document.getElementById('more-option-fond'),
    more_option_3th = document.getElementById('more-option-3th'),
    more_option_tactic = document.getElementById('more-option-tactic'),
    more_option_analitics = document.getElementById('more-option-analitics'),

    price = document.getElementById('price-count'),
    //Счётчик ПК
    counter_pc = document.getElementById('counter-pc'),
    btn_plus_pc = document.getElementById('btn-plus-pc'),
    btn_minus_pc = document.getElementById('btn-minus-pc'),
    //Счётчик принтетров
    counter_printers = document.getElementById('counter-printers'),
    btn_plus_print = document.getElementById('btn-plus-print'),
    btn_minus_print = document.getElementById('btn-minus-print'),
    //Счётчик серверов
    counter_servers = document.getElementById('counter-servers'),
    btn_plus_servers = document.getElementById('btn-plus-servers'),
    btn_minus_servers = document.getElementById('btn-minus-servers'),
    //Счётчик активного оборудования
    counter_routers = document.getElementById('counter-routers'),
    btn_plus_routers = document.getElementById('btn-plus-routers'),
    btn_minus_routers = document.getElementById('btn-minus-routers'),


    selected_model_support = document.getElementById('selected-model-support');

    //Дефолтные значения для счёта
    active_Model_support = 1;
    active_service_time = 1;
    def_price = 1900;
    //Ценники
    price_pc = 500; //Цена за 1 ПК
    price_print = 300;//Цена Принтера
    price_servers = 1000;
    price_routers = 500 ;
  //КОЭФ
    price_analitics = 1.1 ;
    price_fond = 1.15;
    price_logist = 1.1;
    price_tactic = 1.1;
    //Кол-во
    count_pc = 5; // Кол-во ПК
    count_printers = 1;//Кол-во принетров
    count_servers = 0;
    count_routers = 1;
    //Суммы
    score_price_pc = price_pc * count_pc;
    score_price_printers = price_print * count_printers;
    score_price_servers = price_servers * count_servers;
    score_price_routers = price_routers * count_routers;
    score = 0;
    k1 = 1;
    k2 = 0;
    k3 = 0;
    k4 = 0;
    k5 = 0;
    k6 = 0;
    k7 = 0;
