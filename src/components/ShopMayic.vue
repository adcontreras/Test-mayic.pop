<template>
    <div class="main">
        <!-- <div class="container-1">
        <h3 class="tittle">HALLOWEEN</h3>
        </div> -->
        <h3 class="tittle">SHOP</h3>
        <div class="products">  
            <section class="product" style="display: none;">

                <div class="img-der"></div>
                <div class="texto">
                    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div class="precio">$10</div>
                </div>
                <div class="bt-comprar"><router-link to="/cart"><button>Comprar</button></router-link>
  </div>            </section>
        </div>
        <div class="bt-more"><button>MORE</button></div>
    </div>
</template>


<script>
export default {
    name: 'ShopMayic',
    props: {
    msg: String
  },

  methods: {
    filterProducts() {
      const searchText = this.searchText.toLowerCase();
      this.filteredProducts = this.productsData.filter((product) =>
        product.description.toLowerCase().includes(searchText)
      );
    },
  },

    mounted() {
        const productsData = [
    {
        imageUrl: 'https://i.pinimg.com/564x/73/03/f1/7303f1723e2a6ab283a27032bda1ead7.jpg',
        description: 'Paleta de chocolate amargo y relleno de vainilla',
        price: '$10'
    },
    {
        imageUrl: 'https://i.pinimg.com/564x/73/03/f1/7303f1723e2a6ab283a27032bda1ead7.jpg',
        description: 'Paleta de chocolate amargo y relleno de oreo',
        price: '$15'
    },
    {
        imageUrl: 'https://i.pinimg.com/564x/73/03/f1/7303f1723e2a6ab283a27032bda1ead7.jpg',
        description: 'Paleta de chocolate blanco y relleno de vainilla',
        price: '$10'
    },
    {
        imageUrl: 'https://i.pinimg.com/564x/73/03/f1/7303f1723e2a6ab283a27032bda1ead7.jpg',
        description: 'Paleta de chocolate blanco y relleno de oreo',
        price: '$15'
    },
    {
        imageUrl: 'https://i.pinimg.com/564x/73/03/f1/7303f1723e2a6ab283a27032bda1ead7.jpg',
        description: 'Paleta de chocolate amargo y relleno de vainilla',
        price: '$10'
    },
    {
        imageUrl: 'https://i.pinimg.com/564x/73/03/f1/7303f1723e2a6ab283a27032bda1ead7.jpg',
        description: 'Paleta de chocolate amargo y relleno de oreo',
        price: '$15'
    },
    {
        imageUrl: 'https://i.pinimg.com/564x/73/03/f1/7303f1723e2a6ab283a27032bda1ead7.jpg',
        description: 'Paleta de chocolate blanco y relleno de vainilla',
        price: '$10'
    },
    {
        imageUrl: 'https://i.pinimg.com/564x/73/03/f1/7303f1723e2a6ab283a27032bda1ead7.jpg',
        description: 'Paleta de chocolate blanco y relleno de oreo',
        price: '$15'
    },

];


const productTemplate = document.querySelector('.product');
    const productsContainer = document.querySelector('.products');

    function addProductsToContainer() {
      productsData.forEach((product) => {
        const productClone = productTemplate.cloneNode(true);
        productClone.style.display = 'block'; // Muestra el producto clonado

        const imgDiv = productClone.querySelector('.img-der');
        imgDiv.style.backgroundImage = `url('${product.imageUrl}')`;

        const description = productClone.querySelector('.description');
        description.textContent = product.description;

        const precio = productClone.querySelector('.precio');
        precio.textContent = product.price;

        productsContainer.appendChild(productClone);
      });
    }

    addProductsToContainer();

    }
};
</script>

<style scoped>  
.container-1 {
    background-image: url('https://image.slidesdocs.com/responsive-images/background/pastel-colored-with-3d-rendered-pumpkin-and-candles-powerpoint-background_079e05830a__960_540.jpg');
    background-size: cover; 
    background-repeat: no-repeat; 
    background-position: center; 
    background-color: #f0f0f0;
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: center; 
}

.tittle {
    text-align: center;
    font-size: 30px;
    padding: 30px;
    margin-top: 30px; 
}

.products{
    width: 90%;
    height: auto; 
    margin: auto;
    display: flex;
    flex-wrap: wrap; 
    justify-content: space-between; 
}

.product{
    width: 25%;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top:30px;
    margin-bottom: 30px; 
    padding-right: 10px;
    padding-left: 10px;
}

.img-der{
    width: 100%;
    height: 80%;
    background-image: url('https://i.pinimg.com/236x/c9/ef/0d/c9ef0d841c8e364fa3a85c035895c8bd.jpg');
    background-size: cover; 
    background-repeat: no-repeat; 
    background-position: center; 
    display:flex;
    border-radius: 10px;
}

.texto{
    display:flex;
    align-items: flex-end;
    margin-top: 10px;

}

.texto p{
    width: 80%;
    font-size: 14px;
    margin: 0; 
    display:flex;
    margin-right: 15px;
}

.precio {
    width: 30px;
    height: 30px; 
    background-color: rgb(0, 0, 0);
    border-radius: 50%; 
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(255, 255, 255); 
    font-weight: bold; 
  }

  .bt-comprar{
    display: flex;
    width: 100px;
    margin:auto;
    border: 1px solid black;
    color:rgb(0, 0, 0);
    border-radius: 50px;
    margin-top:20px;
    margin-bottom:60px;
    justify-content: center;
    cursor:pointer;
  }

  .bt-comprar p{
    margin:auto;
  }

  .bt-comprar button{
    border:none;
    margin:auto;
    background-color: white;
    color:black;
    cursor: pointer;

  }

  .bt-more{
    display: flex;
    width: 150px;
    height: 30px;
    margin:auto;
    background-color: #000000;
    border: 0;
    border-radius: 50px;
    margin-top:20px;
    margin-bottom:60px;

  }
    .bt-more button{
    border:none;
    margin:auto;
    background-color: black;
    color:white;
    cursor: pointer;
  }

</style>