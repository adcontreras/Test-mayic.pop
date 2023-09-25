<template>
      <div class="main-container">
        <div class="section-container">
            <section class="left">
                <div class="email-container">
                    <h3 class="tittle">YOUR EMAIL</h3>
                    <input class="email" type="email" name="email" id="email">    
                </div>
                <div class="addres-container">
                    <h3 class="tittle">YOUR SHIPPING ADDRESS</h3>
                    <div class="name-container">
                        <input type="text" name="name" id="name" placeholder="Name">
                        <input type="text" name="last-name" id="last-name" placeholder="Lastname">
                    </div>
                    <div class="phone-container">
                        <input type="number" name="local-phone" id="local-phone" placeholder="Local phone">
                        <input type="number" name="phone-movile" id="phone-movile" placeholder="Mobile phone">  
                    </div>
                    <input class="addres" type="text" name="addres" id="addres" placeholder="Addres">
                    <input type="number" name="house-number" id="house-number" placeholder="House number">
                    <input type="number" name="zipcode" id="zipcode" placeholder="ZIP">
                    <input type="text" name="country" id="country" placeholder="Country">    
                </div>
            </section>

            <section class="right">
                <div class="tittle-cart">
                    <h3 class="your-cart">YOUR CART</h3>
                    <p class="items">1 item in your order</p>
                </div>
                <button class="continue-shop">Continue Shopping</button>
                <div class="product">
                    <article class="img"></article>
                    <article class="description-product">
                        <p class="clave">C100</p>
                        <p class="caract">Code:C100ASJ</p>
                        <p class="caract">Weight:10 KG</p>     
                        <p class="remove">Remove this item</p>               
                    </article>
                    <article class="cost-unity">
                        <p class="precio">MX $80</p>
                        <input type="number" name="unidad" id="unidad" placeholder="1">
                        <!-- <div class="unidad">1</div> -->
                    </article>
                </div>
                <h3 class="summary">ORDER SUMMARY</h3>
              <div class="price-details">
                <div class="subtotal">
                    <p>Subtotal:</p>
                    <input type="text" name="subtotal" id="subtotal" placeholder="MX $80">
                </div>
                <hr>
                <div class="desc">
                    <p>Discounts:</p>
                    <input type="text" name="cupon" id="cupon" placeholder="Add cupon">
                </div>
                <hr>
                <div class="subtotal">
                    <p>Shipping:</p>
                    <input type="text" name="subtotal" id="subtotal" placeholder="MX $30">
                </div>
                <div class="total">
                    <p>Order total:</p>
                    <input type="text" name="subtotal" id="subtotal" placeholder="MX $130">
                </div>
                <div class="bt-shop">
                    <button class="continue-shop">Shop</button>

                </div>
            </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShopCart',
    props: {
        msg:String
    }
}
</script>

<style>
.main-container{
    width: 100%;
    height: 800px;
    display:flex;
}

.section-container{
    width: 95%;
    height: 80%;

    display:flex;
    margin:auto;

}

.left{
    width: 45%;
    height: 80%;
    margin:auto;
    margin-left: 15px;
}

input[type="text"],
input[type="number"],
input[type="email"] {
  border-radius: 5px;
  padding: 5px; 
  margin-bottom: 10px;
}

.name-container {
    display: flex;
    justify-content: space-between; 
    width: 100%;
  }
  
  .name-container input {
    flex: 1; 
    margin-right: 10px;
    width: 50%;
}

  .phone-container {
    display: flex;
    justify-content: space-between; 
    width: 100%; 
  }
  
  .phone-container input {
    flex: 1; 
    margin-right: 10px; 
    width: 50%;
}

.email-container{
    height: 30%;
}
.addres-container{
    width:100%;
    height: 70%;
}

.addres{
    width: 98%;
}

.email{
    width: 98%;
}

.right{
    width: 45%;
    background-color: rgb(250, 236, 236);
    display:flex;
    margin:auto;
    text-align: center;
    display: flex;
    flex-direction: column; 
    justify-content: center; 
    padding:20px;
    border-radius: 50px;
}

.continue-shop{
    margin-bottom:40px;
    margin:auto;
    padding: 5px;
    border-radius: 20px;
    background-color: black;
    color:white;
    font-size:12px;
    cursor:pointer;
}

.items{
    text-align: center;
    margin:0;
}
.product{
    display:flex;
    justify-content: space-between;
    text-align: center;
    margin-bottom: 20px;
    margin-top:20px;
}

.img{
    width: 30%;
    height: 150px;
    background-image: url('https://i.pinimg.com/564x/50/a4/1a/50a41a405f8db7206550ad3e9bced96c.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    /* margin:2px; */
    display:flex;
}

.description-product{
    width: 40%;
    height: 150px;
    text-align: left;
    margin-left:10px;
    font-size: 12;
}   

.clave{
    font-weight: bold;
}

.remove{
    font-size: 9px;
    margin-top: 5px;
}

.cost-unity{
    width: 30%;
    height: 150px;
    /* background-color: rgb(94, 203, 149); */
}

.precio{
    font-weight: bold;
}

#unidad{
    width: 40px;
    height: 30px;
    text-align: right;
}

.summary{
    text-align: center;
    margin-bottom:30px;
}

.price-details input{
    width: 100px;
    margin-top: 30px;
} 

p{
    margin: 0;
    line-height: 30px; 
    display: inline-block; 
    vertical-align: middle; 
    margin-right:50px;
}

input {
    vertical-align: middle; 
    width: 100px;
}

.bt-shop button{
    margin-top: 15px;
    width: 80px;
    height: 30px;
}

</style>