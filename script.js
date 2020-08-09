/** Add any JavaScript you need to this file. */

let burgers = [
  {
    src: 'images/burger1.png',
    alt: 'hamburger',
    name: 'Big Mac',
    desc: 'Main signature burger',
    price: 5.7,
    category: 1
  },
  {
    src: 'images/double-quarter.jpg',
    alt: 'hamburger',
    name: 'Double quater pounder cheese',
    desc: 'Meat Lover',
    price: 7.5,
    category: 1
  },
  {
    src: 'images/mcdouble.jpg',
    alt: 'mcdouble',
    name: 'McDouble',
    desc: 'Enjoy for less',
    price: 3.7,
    category: 1
  },
  {
    src: 'images/filet-o-fish.jpg',
    alt: 'filet-o-fish',
    name: 'Filet-O-Fish',
    desc: 'Fish Lover',
    price: 6.5,
    category: 1
  },
  {
    src: 'images/hot-fudge-sundae.jpg',
    alt: 'hot-fudge-sundae',
    name: 'Hot Fudge Sundae',
    desc: 'Sweet treats',
    price: 2.7,
    category: 2
  },
  {
    src: 'images/vanilla-cone.jpg',
    alt: 'vanilla-cone',
    name: 'Vanilla Cone',
    desc: 'Ice-cream',
    price: 2,
    category: 2
  },
  {
    src: 'images/strawberry-milkshake.jpg',
    alt: 'strawberry-milkshake',
    name: 'Strawberry Milkshake',
    desc: 'Milkshake',
    price: 3.5,
    category: 3
  }
];

// selected item category 0 all 1 burgers 2 treats 3 drinks
let selectedItem = 0;

window.onload = function() {
  burgerGenerator();
  // add event onclick
  let btnAll = document.getElementById('btn-all');
  btnAll.addEventListener('click', function() {
    selectedItem = 0;
    clear();
    burgerGenerator();
  });
  let btnBurgers = document.getElementById('btn-burgers');
  btnBurgers.addEventListener('click', function() {
    selectedItem = 1;
    clear();
    burgerGenerator();
  });
  let btnTreates = document.getElementById('btn-treats');
  btnTreates.addEventListener('click', function() {
    selectedItem = 2;
    clear();
    burgerGenerator();
  });
  let btnDrinks = document.getElementById('btn-drinks');
  btnDrinks.addEventListener('click', function() {
    selectedItem = 3;
    clear();
    burgerGenerator();
  });

  // need more work
  let subEmail = document.getElementById('btn-subscribe');
  subEmail.addEventListener('click', function() {
    let input = document.getElementById('footer-email');
    console.log(input.value);
  });
};

function burgerGenerator() {
  let cards = document.getElementById('cards');
  burgers.map(burger => {
    if (selectedItem === 0 || selectedItem === burger.category) {
      let card = document.createElement('div');
      card.className = 'card';

      let img = document.createElement('img');
      img.className = 'burger-img';
      img.src = burger.src;
      img.alt = burger.alt;
      card.appendChild(img);

      let container = document.createElement('div');
      container.className = 'container';

      let name = document.createElement('h4');
      name.className = 'title';
      name.innerHTML = burger.name;
      container.appendChild(name);

      let desc = document.createElement('p');
      desc.innerHTML = burger.desc;
      container.appendChild(desc);

      let price = document.createElement('p');
      price.innerHTML = burger.price;
      container.appendChild(price);
      card.appendChild(container);

      cards.appendChild(card);
    }
  });
}

function clear() {
  let cards = document.getElementById('cards');
  while (cards.firstChild) {
    cards.removeChild(cards.firstChild);
  }
}
