<template>
<div class= "main">     
    <div class="container-1">
        <h3 class="tittle">CAKE POPS</h3>
        <div class="b-1"><button v-on:click="handleClick">SHOP NOW</button></div>
        </div>
        <div class="container-2">
            <section class="img-big-izq">
                <div class="precio-grande">$10</div>
                <p class="description-grande">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </section>

            <section class="img-big-derecha">
                <div class="foto-izq">
                    <div class="img-izq"></div>
                    <div class="texto">
                        <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div class="precio">$10</div>    
                    </div>
                    <div class="comprar"><button v-on:click="handleClick">Comprar</button></div>
                    
                </div>
                <div class="foto-derecha">
                    <div class="img-der"></div>
                    <div class="texto">
                        <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div class="precio">$10</div>
                        
                    </div>
                    <div class="comprar"><button v-on:click="handleClick">Comprar</button></div>
                </div>
                <div class="illustration"></div>
            </section>
        </div>
        <div class="b-2"><button v-on:click="handleClick">SHOP A GIFT</button></div>  
    </div>
</template>

<script>

// import {router} from 'vue';
import {useRouter} from 'vue-router';

export default {
    name: 'HomeMayic',
    props: {
        msg:String
    },
    setup() {
    const router = useRouter();

    const handleClick = () => {
      router.push('/shop');
    };

    return {
      handleClick,
    };
},
};
</script>

<style scoped>
  .container-1 {
    background-image: url('https://inspgr.id/app/uploads/2020/03/3D-uv-05.jpg');
    background-size: cover; 
    background-repeat: no-repeat; 
    background-position: center; 
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
    margin-top: 0; 
}

.b-1 {
    display: flex;
    width: 150px;
    height: 30px;
    margin: 0; 
    border: 0;
    border-radius: 50px;
    margin-bottom: 30px;
    background-color: black;
    cursor:pointer;
}

.b-1 button {
    border: none;
    margin: auto;
    background-color: black;
    color: white;
    cursor:pointer;
}


.container-2{
    width: 80%;
    margin:auto;
    margin-top:70px;
    height: 1000px;
    display:flex;
}

.img-big-izq {
    width: 50%;
    height: 55%;
    display: flex;
    flex-direction: column; 
    justify-content: space-between; 
    margin-right: 30px;
    position: relative; 
    background-image:url('https://i.pinimg.com/564x/41/c4/8c/41c48c1add0e0974ba60744d7d0872c4.jpg');
    background-size: cover; 
    background-repeat: no-repeat; 
    background-position: center;

  }
  
  .precio-grande {
    width: 30px;
    height: 30px;
    background-color: black;
    border-radius: 50%; 
    color: white;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self:flex-end;
    margin:10px;
  }
  
  .description-grande {
    font-size: 10px;
    margin: 10px; 
    width: 70%;
  }

.img-big-derecha{
    width: 50%;
    height: 90%;
    /* height: auto; */
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
}

.foto-izq{
    /* width: 50%;
    height: 50%; */
    /* width: 100%;
    height: 300px; */
    flex: 0 0 calc(50% - 10px); 
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.img-izq{
    /* width: 100%;
    height: 50%; */
    width: 100%;
    height: 300px;
    background-image:url('https://i.pinimg.com/564x/73/03/f1/7303f1723e2a6ab283a27032bda1ead7.jpg');
    background-size: cover; 
    background-repeat: no-repeat; 
    background-position: center;
}

.img-der{
    /* width: 100%;
    height: 50%; */
    width: 100%;
    height: 300px;
    background-color: blanchedalmond;
    background-image:url('https://i.pinimg.com/564x/50/a4/1a/50a41a405f8db7206550ad3e9bced96c.jpg');
    background-size: cover; 
    background-repeat: no-repeat; 
    background-position: center;
}

.foto-derecha{
    /* width: 50%;
    height: 50%; */
    /* width: 100%;
    height: 300px; */
    flex: 0 0 calc(50% - 10px); 
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.texto{
    /* width: 100%;
    height: 10%; */
    font-size: 10px;
    display: flex; 
    align-items: flex-end; 
    margin-top:10px;
}

.texto p{
    width: 90%;
    font-size: 10px;
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
    width: 100px;
    height: 35px;
    margin:auto;
    /* background-color: #000000; */
    border: 1px solid black;
    color:rgb(0, 0, 0);
    border-radius: 50px;
    margin-top:20px;
    margin-bottom:60px;
    justify-content: center;
    cursor:pointer;
  }

  .comprar{
    display: flex;
    width: 100px;
    height: 30px;
    margin:auto;
    background-color: #000000;
    border: 0;
    border-radius: 50px;
    margin-top:20px;
    margin-bottom:60px;
    cursor:pointer;

  }

  .comprar button{
    border:none;
    margin:auto;
    background-color: black;
    color:white;
    cursor:pointer;

  }

.illustration{
    /* width: 50%; */
    height: 400px;
    flex: 1 0 100%;
    margin-top:-40px;
    background-image:url(../assets/stickers.png);
    background-size: cover; 
    background-repeat: no-repeat; 
    background-position: center; 
    /* width: 100%;
    height: 500px;  */
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: center; 
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
    margin-bottom:40px;
    cursor:pointer;
  }

  .b-2 button{
    border:none;
    margin:auto;
    background-color: black;
    color:white;
    cursor:pointer;
  }

</style>