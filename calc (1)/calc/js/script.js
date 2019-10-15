let tabsLeft = document.querySelector('.tabs-left'),
    tabsRight = document.querySelector('.tabs-right'),
    blocksBlock = document.getElementById('blocks-block'),
    pagesBlock = document.getElementById('pages-block'),
    countBlock = document.getElementById('counter-block'),
    countPage = document.getElementById('counter-pages'),
    countHour = document.getElementById('counter-hour'),
    countRate = document.getElementById('counter-rate'),
    btnPlusBlock = document.getElementById('btn-plus-block'),
    btnMinusBlock = document.getElementById('btn-minus-block'),
    btnPlusPage = document.getElementById('btn-plus-pages'),
    btnMinusPage = document.getElementById('btn-minus-pages'),
    changeCheck = document.getElementById('checkbox-change'),
    cmsCheck = document.getElementById('checkbox-cms'),
    totalValue = document.getElementById('total-value'),
    input = document.getElementsByTagName('input') ,
    total = 0;
const priceBlock = 500,
      pricePage = 2500,
      cmsPrice = 3000,
      changePrice = 1500;


window.addEventListener('DOMContentLoaded' , () => {

  tabsLeft.addEventListener('click' , () => {
    for(let i = 0 ; i < input.length ; i++) {
      input[i].value = '' ;
    };
    blocksBlock.style.display = 'Flex' ;
    pagesBlock.style.display = 'none' ;

    tabsLeft.classList.add('active') ;
    tabsRight.classList.remove('active') ;



    totalValue.innerHTML = total ;


  });
  tabsRight.addEventListener('click' , () => {
    for(let i = 0 ; i < input.length ; i++) {
      input[i].value = '' ;
    };
    blocksBlock.style.display = 'none' ;
    pagesBlock.style.display = 'Flex' ;

    tabsRight.classList.add('active') ;
    tabsLeft.classList.remove('active') ;

    changeCheck.checked = false
    cmsCheck.checked = false

    totalValue.innerHTML = total ;

});

function count(x, y) {
  if (x.value < 1) {
    x.value = 1
  }
  total = x.value * y;
  totalValue.innerHTML = total
};



countBlock.addEventListener('input' , () => {
  countHour.value = '';
  countRate.value = '';
  count(countBlock , priceBlock);
});


countHour.addEventListener('input' , () => {
  if (countHour.value < 1) {
    countHour.value = 1
  }
  countBlock.value = '';
  countPage.value= '';
  total = 0
  totalValue.innerHTML = 0
  total = countRate.value * countHour.value;
  totalValue.innerHTML = total
});


countRate.addEventListener('input' , () => {
  if (countRate.value < 1) {
    countRate.value = 1
  }
  countBlock.value = '';
  countPage.value= '';
  totalValue.innerHTML = 0 ;
  total = countRate.value * countHour.value;
  totalValue.innerHTML = total
});

countPage.addEventListener('input' , () => {
  countHour.value = '';
  countRate.value = '';
  count(countPage , pricePage);
});

btnPlusBlock.addEventListener('click' , () => {
  countBlock.value = Number(countBlock.value) + 1 ;
  count(countBlock , priceBlock);
});
btnMinusBlock.addEventListener('click' , () => {
  countBlock.value = Number(countBlock.value) - 1 ;
  count(countBlock , priceBlock);
});
btnPlusPage.addEventListener('click' , () => {
  countPage.value = Number(countPage.value) + 1 ;
  count(countPage , pricePage);
});
btnMinusPage.addEventListener('click' , () => {
  countPage.value = Number(countPage.value) - 1 ;
  count(countPage , pricePage);
});




changeCheck.addEventListener('change' , () => {
  total = Number(totalValue.innerHTML)
  if (changeCheck.checked) {
    totalValue.innerHTML = total + changePrice ;
  } else {
    totalValue.innerHTML = total - changePrice ;
  }
});

cmsCheck.addEventListener('change' , () => {
  total = Number(totalValue.innerHTML)
  if (cmsCheck.checked) {
    totalValue.innerHTML = total + cmsPrice ;
  } else {
    totalValue.innerHTML = total - cmsPrice ;
  }
});

});
