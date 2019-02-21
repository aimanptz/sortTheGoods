window.addEventListener('load',function() {
  app.init();
});

const goodsArr = [];

class GoodsItem { //goods item class with a unique price
  constructor() {
    this.name = 'Goods List Item';
    this.price = Math.floor(Math.random() * (100 + 1));
  }
}

const app = {
  init() {
    this.bindController();
  },
  bindController() {
    const sortBtn = document.querySelector('#sort'),
          addItem = document.querySelector('#addItem'),
          deleteItem = document.querySelector('#deleteItem'),
          goodsList = document.querySelector('#goodsList');
    
    let sortOpt = 'up'; // init sort by price direction flag
    let sortArrow = document.querySelector('#sortDirection');
    
    addItem.addEventListener('click', () => {
      addGoodsItem();
      goodsList.innerHTML = renderGoodsArr();
    });
    
    deleteItem.addEventListener('click', () => {
      deleteGoodsItem();
      goodsList.innerHTML = renderGoodsArr();
    });
    
    sortBtn.addEventListener('click', () => {
      sortByPrice(sortOpt);
      if (sortOpt === 'up') {
        sortOpt = 'down';
        sortArrow.innerHTML = '&#8595;';
      } else {
        sortOpt = 'up';
        sortArrow.innerHTML = '&#8593;';
      }
      goodsList.innerHTML = renderGoodsArr();
    })
  }
};

function addGoodsItem() {
  goodsArr.unshift(new GoodsItem());
}

function deleteGoodsItem() {
  goodsArr.shift(goodsArr[goodsArr.length - 1]);
}

function sortByPrice(direction) {
  goodsArr.sort(function(a, b) {
    switch(direction) {
      case 'up': return a.price - b.price;
      case 'down': return b.price - a.price;
    }
  });
}

function renderGoodsArr() {
  let allGoods = '';
  
  goodsArr.forEach((item) => {
    allGoods += this.renderGoodsItem(item);
  });
  
  return allGoods;
}

function renderGoodsItem (goodsItem) {
  let item = `<li class="goods__item"><h5>${goodsItem.name}</h5><span>Price: ${goodsItem.price}</span></li>`;
  
  return item;
}