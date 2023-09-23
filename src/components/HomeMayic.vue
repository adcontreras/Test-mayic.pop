<template>
<div class= "main">     
    <div class="container-1">
        <h3 class="tittle">CAKE POPS</h3>
        <div class="b-1"><button>SHOP NOW</button></div>
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
                    
                </div>
                <div class="foto-derecha">
                    <div class="img-der"></div>
                    <div class="texto">
                        <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div class="precio">$10</div>
                    </div>
                </div>
                <div class="illustration"></div>
            </section>
        </div>
        <div class="b-2"><button>SHOP A GIFT</button></div>    
    </div>
</template>

<script>
export default {
    name: 'HomeMayic',
    props: {
        msg:String
    }
}
</script>

<style>
  .container-1 {
    background-image: url('https://inspgr.id/app/uploads/2020/03/3D-uv-05.jpg');
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
    margin-top: 0; 
}

.b-1 {
    display: flex;
    width: 150px;
    height: 30px;
    margin: 0; 
    background-color: #000000;
    border: 0;
    border-radius: 50px;
    margin-bottom: 30px;
}

.b-1 button {
    border: none;
    margin: auto;
    background-color: black;
    color: white;
}


.container-2{
    width: 80%;
    margin:auto;
    margin-top:70px;
    height: 500px;
    display:flex;
}

.img-big-izq {
    width: 50%;
    height: 70%;
    background-color: chocolate;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    padding: 10px;
    margin-right: 30px;
    position: relative; 
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
  }
  
  .description-grande {
    font-size: 9px;
    margin-top: 10px; 
    width: 70%;
  }

.img-big-derecha{
    width: 50%;
    height: 90%;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.foto-izq{
    width: 50%;
    height: 50%;
    flex: 0 0 calc(50% - 10px); 
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.img-izq{
    width: 100%;
    height: 80%;
    background-color: blanchedalmond;
}

.img-der{
    width: 100%;
    height: 80%;
    background-color: blanchedalmond;
}

.foto-derecha{
    width: 50%;
    height: 50%;
    flex: 0 0 calc(50% - 10px); 
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.texto{
    width: 100%;
    height: 20%;
    font-size: 9px;
    display: flex; 
    align-items: flex-end; 
}

.texto p{
    width: 80%;
    font-size: 9px;
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

.foto-derecha{
    width: 50%;
    height: 50%;
}

.illustration{
    width: 50%;
    height: 50%;
    background-color: rgb(142, 23, 75);
    flex: 1 0 100%;
    margin-top:30px;
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
  }

  .b-2 button{
    border:none;
    margin:auto;
    background-color: black;
    color:white;
  }
</style>