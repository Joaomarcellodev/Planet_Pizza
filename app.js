const itensList = document.querySelector('.itens-list')

const itens = [

    {
        name:'Calabresa Saturno',
        image:'pizza_calabresa.jpg',
        description: "A Calabresa Saturno é uma explosão de sabor que vai te levar para outra órbita! Essa pizza irresistível combina uma generosa camada de molho de tomate artesanal, queijo muçarela derretido e rodelas suculentas de calabresa levemente picante. Para um toque especial, adicionamos cebolas caramelizadas, azeitonas pretas e um fio de azeite de ervas, garantindo uma experiência cósmica a cada mordida. Finalizada com orégano fresco e borda crocante, a Calabresa Saturno é perfeita para quem busca um sabor intenso e marcante.",
        priceP: "35.90",
        priceM: "42.00",
        priceG: "50.00", 

    },
    {
        name:'Frango Vênus',
        image:'pizza_de_frango.jpg',
        description:"A Vênus Frango é uma pizza apaixonante, digna do planeta mais quente do sistema solar! Com uma base de molho de tomate artesanal e uma generosa camada de queijo muçarela derretido, essa delícia é coberta com suculentos pedaços de frango desfiado, temperados na medida certa. Para deixar tudo ainda mais irresistível, adicionamos catupiry cremoso, milho doce e um toque de páprica defumada, trazendo um equilíbrio perfeito entre sabor e cremosidade. Finalizada com orégano fresco e uma borda dourada e crocante, a Vênus Frango promete conquistar seu paladar desde a primeira mordida!",
        priceP: "37.50",
        priceM: "44.20",
        priceG: "52.00", 
    },
    {
        name:'Carne Terra',
        image:'pizza_de_carne.jpg',
        description:"A Carne Terra é a pizza perfeita para quem busca um sabor robusto e irresistível! Sobre uma base de molho de tomate artesanal, espalhamos uma generosa camada de queijo muçarela derretido e suculentos pedaços de carne desfiada temperada com especiarias selecionadas. Para um toque especial, adicionamos cebolas roxas levemente caramelizadas, pimentões assados e um fio de azeite de alho, garantindo um aroma e um sabor marcantes. Finalizada com orégano fresco e uma borda crocante, a Carne Terra é a escolha ideal para os amantes de um sabor intenso e autêntico!",
        priceP: "39.90",
        priceM: "46.70",
        priceG: "54.50", 
    },

    {
        name:'Chocolate Netuno',
        image:'pizza_de_chocolate.png',
        description: "A Chocolate Netuno é uma viagem intergaláctica para os amantes do doce! Sobre uma massa leve e macia, espalhamos uma generosa camada de chocolate cremoso derretido, criando uma base irresistível. Para tornar essa experiência ainda mais especial, adicionamos pedaços de chocolate ao leite e branco, que derretem suavemente a cada mordida. Finalizada com um toque de avelãs crocantes e um leve pó de cacau, a Chocolate Netuno é a combinação perfeita entre cremosidade e intensidade, levando seu paladar a uma verdadeira órbita de prazer!",
        priceP: "42.00",
        priceM: "54.70",
        priceG: "65.00", 
    },

    {
        name:'Queijo Lua',
        image:'pizza_queijo.jpg',
        description: "A Queijo Lua é uma pizza delicada e sofisticada, perfeita para quem adora o sabor suave e cremoso do queijo! Sobre uma base fina e crocante, espalhamos um delicioso molho branco, criando uma camada rica e suave. A pizza é generosamente coberta com uma mistura de queijos selecionados, como muçarela, parmesão e gorgonzola, que derretem de forma cremosa e envolvem o paladar com intensidade. Para um toque especial, finalizamos com um leve fio de azeite de oliva e um toque de ervas finas, criando uma combinação perfeita de sabor e leveza. A Queijo Lua é a escolha ideal para quem busca uma experiência gastronômica elegante e cheia de sabor!",
        priceP: "38.00",
        priceM: "48.70",
        priceG: "55.00",
    },

    {
        name:'Portuguesa Urano',
        image:'pizza-portuguesa.webp',
        description: "A Portuguesa Urano é uma pizza que traz um universo de sabores a cada pedaço! Em sua base de molho de tomate artesanal, espalhamos uma camada generosa de queijo muçarela, que se derrete de forma perfeita. A combinação de presunto, ovos cozidos, azeitonas pretas, cebolas roxas e pimentões adiciona uma mistura de texturas e sabores intensos. Para um toque especial, a Portuguesa Urano é finalizada com orégano fresco e um fio de azeite de oliva, criando uma explosão de frescor e sabor. Uma verdadeira viagem interplanetária de gostos que vai conquistar seu paladar!",
        priceP: "39.60",
        priceM: "45.70",
        priceG: "57.50",
    },

];

document.addEventListener('DOMContentLoaded', () => {

    let output ='';

    itens.forEach(({name,image,description,priceP,priceM,priceG}) => {

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
              <a href="item_details.html?&name=${name}&image=${image}&description=${description}&priceP=${priceP}&priceM=${priceM}&priceG=${priceG}" class="option-detail">Ver detalhes</a>

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