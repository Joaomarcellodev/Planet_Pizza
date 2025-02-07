const itensList = document.querySelector('.itens-list')

const itens = [

    {name:'calabresa Saturno',image:'pizza_calabresa.jpg'},
    {name:'Frango Vênus',image:'pizza_de_frango.jpg'},
    {name:'Chocolate Netuno',image:'pizza_de_chocolate.png'},
    {name:'Queijo Lua',image:'pizza_queijo.jpg'},
    {name:'Portuguesa Urano',image:'pizza-portuguesa.webp'},
];

document.addEventListener('DOMContentLoaded', () => {

    let output ='';

    itens.forEach(({name,image,description}) => {

        output += `<div class="item-card"> 
          <img
            class="item-image"
            src="./assets/${image}"
            alt="${name}"
          />

          <div class="card-content">
            <h2>${name}</h2>

            <div class="item-raiting">
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star-half"></i>
            </div>

            <div class="item-option">
              <a href="item_details.html?pizza=&name=${name}&priceP=34.50&priceM=48.80&priceG=57.50&image=${image}" class="option-detail">Ver detalhes</a>

              <div class="icon-option">
                <i class="bx bxs-chat"></i>
              </div>

              <div class="icon-option">
                <i class="bx bx-heart"></i>
              </div>
            </div>
          </div>
        </div>`;
    })

    itensList.innerHTML= output;

})


if('serviceWorker' in navegator){
    window.addEventListener("load", function(){
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("service worker registred"))
            .catch(err => console.log("service worker not registred", err))
    })
}