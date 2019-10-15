
window.addEventListener('DOMContentLoaded' , () => {
  scoreTotal();
// Добавляем кол-во ПК и считаем
  btn_plus_pc.addEventListener('click' , () => {
    count_pc++;
    scoreTotal();
  }) ;
// Убавляем кол-во ПК и считаем
  btn_minus_pc.addEventListener('click' , () => {
    if (count_pc == 1){

    }else {
    count_pc--;
    scoreTotal();
  }
  }) ;
//Добавляем принтеры
  btn_plus_print.addEventListener('click' , () => {
    count_printers++;
    scoreTotal();
  }) ;
//Убавляем принтеры
  btn_minus_print.addEventListener('click' , () => {
    if (count_printers == 0){

    }else {
      count_printers--;
      scoreTotal();
    }
    }) ;
//Добавляем сервера
      btn_plus_servers.addEventListener('click' , () => {
        count_servers++;
        scoreTotal();
      }) ;
//Убавляем сервера
      btn_minus_servers.addEventListener('click' , () => {
        if (count_servers == 0){

        }else {
          count_servers--;
          scoreTotal();
        }
        }) ;
//Добавляем активное сетевое
          btn_plus_routers.addEventListener('click' , () => {
            count_routers++;
            scoreTotal();
          }) ;
//Убавляем активное сетевое
          btn_minus_routers.addEventListener('click' , () => {
              if (count_routers == 0){

              }else {
              count_routers--;
              scoreTotal();
            }

            }) ;


/*btn_minus_print.addEventListener('click' , () => {
  count_printers = click_on_counter(count_printers , price_print);
  console.log( count_printers );
});

function click_on_counter(count,price) {
  let count_loc = count;
      price_loc = price
  count_loc++;
  score_loc = count_loc * price
  return score_loc;
}*/

//Выбор модели обслуживания полного аутсорса
  fullOutsource.addEventListener('click' , () => {
    document.querySelectorAll('.select-model-support button').forEach(n => n.classList.remove('active-model-support'))
    fullOutsource.classList.add('active-model-support') ;
    selected_model_support.innerHTML ="Комплексный ИТ-аутсорсинг"
    k1 = 1
    scoreTotal();
  });
//Выбор модели обслуживания выездной поддержки
  f_lvl.addEventListener('click' , () => {
    document.querySelectorAll('.select-model-support button').forEach(n => n.classList.remove('active-model-support'))
    f_lvl.classList.add('active-model-support') ;
    selected_model_support.innerHTML ="Выездная поддержка 1-го уровня"
    k1 = 0.75
    scoreTotal();
  });
//Выбираем время обслуживания
select_service_time_8_5.addEventListener('click' , () => {
  document.querySelectorAll('.active-service-time').forEach(n => n.classList.remove('active-service-time'))
  select_service_time_8_5.classList.add('active-service-time') ;
  k2 = 0 ;
  scoreTotal();
});
select_service_time_12_5.addEventListener('click' , () => {
  document.querySelectorAll('.active-service-time').forEach(n => n.classList.remove('active-service-time'))
  select_service_time_12_5.classList.add('active-service-time') ;
  k2 = 0.5;
  scoreTotal();
});
select_service_time_24_7.addEventListener('click' , () => {
  document.querySelectorAll('.active-service-time').forEach(n => n.classList.remove('active-service-time'))
  select_service_time_24_7.classList.add('active-service-time') ;
  k2 = 1;
  scoreTotal();
});

more_option_logist.addEventListener('click' , () => {
  if (more_option_logist.checked)
  {
      k3=0.1
      scoreTotal()
  } else {
      k3=0
      scoreTotal()
  }

});
more_option_fond.addEventListener('click' , () => {
  if (more_option_fond.checked)
  {
      k4=0.1
      scoreTotal()
  } else {
      k4=0
      scoreTotal()
  }

});
more_option_3th.addEventListener('click' , () => {
  if (more_option_3th.checked)
  {
      k5=0.1
      scoreTotal()
  } else {
      k5=0
      scoreTotal()
  }

});
more_option_tactic.addEventListener('click' , () => {
  if (more_option_tactic.checked)
  {
      k6=0.1
      scoreTotal()
  } else {
      k6=0
      scoreTotal()
  }

});
more_option_analitics.addEventListener('click' , () => {
  if (more_option_analitics.checked)
  {
      k7=0.1
      scoreTotal()
  } else {
      k7=0
      scoreTotal()
  }

});





//Считаем общую стоимость
  function scoreTotal() {
    def_price = 1900;
    counter_pc.value =  Number(count_pc);
    counter_printers.value =  Number(count_printers);
    counter_servers.value = Number(count_servers);
    counter_routers.value =  Number(count_routers);
    score_price_pc = price_pc * count_pc;
    score_price_printers = price_print * count_printers;
    score_price_servers = price_servers * count_servers;
    score_price_routers = price_routers * count_routers;
    total = Number((def_price + score_price_pc + score_price_printers + score_price_servers + score_price_routers)*k1)
    k7Summ = total*k7.toFixed(1)
    k6Summ = total*k6.toFixed(1)
    k5Summ = total*k5.toFixed(1)
    k4Summ = total*k4.toFixed(1)
    k3Summ = total*k3.toFixed(1)
    k2Summ = total*k2.toFixed(1)
    k2Summ = total*k2.toFixed(1) 
  //  k1Summ = total*k1
    score = total + k2Summ + k3Summ + k4Summ + k5Summ + k6Summ + k7Summ
    score = score.toFixed(0)
    price.innerHTML = Number(score)
    animate();
    console.log(score_price_pc , score_price_printers , score_price_servers ,score_price_routers, total , def_price);
  };


//Анимируем
function animate() {
  $('#price-count').spincrement({
      thousandSeparator: ".",
      duration: 300
    });
}

});
