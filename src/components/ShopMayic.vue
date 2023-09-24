<template>
    <div class="main">
        <div class="container-1">
        <h3 class="tittle">HALLOWEEN</h3>
        </div>
        <h3 class="tittle">SHOP</h3>
        <div class="products">  
            <section class="product">
                <div class="img-der"></div>
                <div class="texto">
                    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div class="precio">$10</div>
                </div>
                <div class="comprar"><p>Comprar</p></div>
            </section>

            <section class="product">
                <div class="img-der"></div>
                <div class="texto">
                    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div class="precio">$10</div>
                </div>
                <div class="comprar"><p>Comprar</p></div>

            </section>

            <section class="product">
                <div class="img-der"></div>
                <div class="texto">
                    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div class="precio">$10</div>
                </div>
                <div class="comprar"><p>Comprar</p></div>
            </section>

            <section class="product">
                <div class="img-der"></div>
                <div class="texto">
                    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div class="precio">$10</div>
                </div>
                <div class="comprar"><p>Comprar</p></div>
            </section>  
        </div>
        <div class="b-2"><button>MORE</button></div>
    </div>
</template>

<script>
export default {
    name: 'ShopMayic',
    props: {
        msg:String
    }
}
</script>

<style scoped>  
.container-1 {
    /* background-color: aquamarine; */
    /* background-image: url('https://static.vecteezy.com/system/resources/previews/023/181/176/large_2x/3d-illustration-of-halloween-table-with-food-and-glass-of-juice-ai-generative-image-free-photo.jpg'); */
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
    width: 100%;
    height: 500px;
    margin:auto;
    display: flex;
    padding:40px;
}

.product{
    width: 300px;
    height: 390px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin:auto;
    padding-right: 30px;
    padding-left: 30px;
}

.img-der{
    width: 100%;
    height: 80%;
    background-image: url('https://i.pinimg.com/236x/c9/ef/0d/c9ef0d841c8e364fa3a85c035895c8bd.jpg');
    background-size: cover; 
    background-repeat: no-repeat; 
    background-position: center; 
    display:flex;
}

.texto{
    /* width: 200px; */
    height: 42px;
    display:flex;
    align-items: flex-end;

}

.texto p{
    width: 85%;
    font-size: 12px;
    margin: 0; 
    display:flex;
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

  .comprar{
    display: flex;
    width: 80px;
    height: 35px;
    margin:auto;
    border: 2px solid black;
    color:rgb(0, 0, 0);
    border-radius: 50px;
    margin-top:20px;
    margin-bottom:60px;
    justify-content: center;
    cursor:pointer;
  }

  .comprar p{
    margin:auto;
  }

  .b-2{
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

  .b-2 button{
    border:none;
    margin:auto;
    background-color: black;
    color:white;
    cursor: pointer;
  }

</style>