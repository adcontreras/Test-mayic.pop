<template>
    <div id="container">
        <nav class="navbar">
            <ul class="nav-logo-section">
                <li class="logo-icon"><router-link to="/"><img src="../assets/Logo-MP-1.png" alt=""></router-link></li>   
                <!-- <li class="notification-icon"></li> -->
            </ul>

            <ul class="nav-left-section">
                <li class="nav-link"><router-link to="/">Home</router-link></li>
                <li class="nav-link"><router-link to="/about">About</router-link></li>
                <li class="nav-link" title="shop">
                    <a href="#" class="dropbtn" id="shopButton" @click="toggleShopDropdown">Shop</a>
                    <div class="dropdown-content" id="shopDropdown" ref="shopDropdown">
                    <router-link to="/shop">Vainilla</router-link>
                    <router-link to="/shop">Oreo</router-link>
                    <router-link to="/shop">Paquetes</router-link>
                    </div>
                </li>
            </ul>

            <ul class="nav-right-section">
                <div class="search-input-container">
                    <span class="search-icon"></span>
                    <!-- <input type="text" value="Search" name="" id=""> -->
                    <input
      v-model="searchText"
      type="text"
      placeholder="Search"
      @keydown.enter="performSearch"
    />
                </div>
                <router-link to="/login"><li class="logIn-icon" tittle="login" ></li></router-link>
                    <!-- <li class="search-icon" tittle="search"><a href="#"></a></li> -->
                <router-link to="/cart"><li class="shop-icon" tittle="shop"></li></router-link>
            </ul>
        </nav>
    </div>
</template>

<script>

export default {
    name: 'NavBar',
    data() {
    return {
      searchText: '',
    };},
    methods: {
  performSearch() {
    // Emitir el evento de búsqueda cuando se presiona Enter
    this.$bus.emit('perform-search', this.searchText);
  },
  toggleShopDropdown() {
    const shopDropdown = this.$refs.shopDropdown;
    if (shopDropdown.style.display === "none" || shopDropdown.style.display === "") {
      shopDropdown.style.display = "block";
    } else {
      shopDropdown.style.display = "none";
    }
  },
  closeShopDropdown(event) {
    const shopButton = document.getElementById("shopButton");
    const shopDropdown = document.getElementById("shopDropdown");
    if (event.target !== shopButton && event.target !== shopDropdown) {
      shopDropdown.style.display = "none";
    }
  },
},}
//     methods:
//     performSearch() {
//       // Emitir el evento de búsqueda cuando se presiona Enter
//       this.$bus.emit('perform-search', this.searchText);
//     },
//     {
//         toggleShopDropdown() {
//             const shopDropdown = this.$refs.shopDropdown;
//             if (shopDropdown.style.display === "none" || shopDropdown.style.display === "") {
//                 shopDropdown.style.display = "block";
//             }
//             else {
//                 shopDropdown.style.display = "none";
//             }
//         },
//         closeShopDropdown(event) {
//             const shopButton = document.getElementById("shopButton");
//             const shopDropdown = document.getElementById("shopDropdown");
//             if (event.target !== shopButton && event.target !== shopDropdown) {
//                 shopDropdown.style.display = "none";
//             }
//         },
//     },
   
//     beforeUnmount() {
//         document.removeEventListener("click", this.closeShopDropdown);
//     },

// };
</script>



<style scoped>
#container{
    width: 100vw;
    display: flex;
}

.nav-link{
    text-decoration: none;
    cursor:pointer;
    color: black;
}

.navbar{
    width: 100%;
    display: flex;
    align-self: center;
    justify-content: space-between;
    margin:auto;
    padding: 10px;
    background-color: rgb(250, 236, 236);
}
.nav-link{
    display: flex;
    width: auto;
    border-radius: 100px;
    margin-left:15px;
    align-items: center;
    padding: 5px 20px 3px;
}
.nav-logo-section {
  display: flex;
  align-items: center; /* Centrar verticalmente los elementos */
}

.nav-logo-section .logo-icon {
  margin-right: 10px; /* Agregar margen derecho para separar el logo de la siguiente sección */
}

.logo-icon{
    display: flex;
    height: 40px;
}
.logo-icon img{
    display: flex;
    width: 35px;
}
div.search-input-container{
    width: 300px;
    height: 30px;
    background-color: white;
    height: auto;
    display: flex;
    border-radius: 100px;
    align-items: center;
    justify-content: center;
    padding-left: 20px;
    box-shadow: 0 1px 6px 0 #bed2f0;
}

input{
    width: 300px;
    height: 30px;
    padding:15px;
    border: none;
    outline: none;
    border-radius: 100px;
}

div.search-input-container:hover{
    box-shadow: 0 1px 6px 0 #9b9ea3;
    border-color: #dfe1e5;
}
div.search-input-container .search-icon{
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/945px-Vector_search_icon.svg.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 20px;
    height: 20px;
}

.nav-right-section{
    display: flex;
    align-items: center;
}

.nav-left-section{
    margin-right: 400px;
    display: flex;
    align-items: center;
}

.nav-left-section li{
    list-style-type:none;
    padding: 0;
    font-size: 18px;
}

.nav-link a{
    text-decoration: none;
    cursor:pointer;
    color: black;
}

nav .nav-left-section img{
    width: 28px;
    border-radius: 50px;
}

.notification-icon{
    background-image: url('https://thenounproject.com/api/private/icons/2212424/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 45px;
    height: 45px;
    list-style-type: none;
}
.nav-left-section .options-icon{
    background-image: url('https://thenounproject.com/api/private/icons/6101231/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 30px;
    height: 30px;
    text-decoration: none;
    margin-left:5px;
    cursor: pointer;
}


.nav-right-section{
        display: flex;
        align-items: center;
    }
    
.nav-right-section li{
        list-style-type:none;
        margin-right: 10px;
        padding: 0;
        font-size: 18px;
        }

/* Estilos para el menú desplegable */
.dropdown {
    position: relative;
    display: inline-block;
    margin-top: 40px;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 350px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    margin-top: 10px;
    top:5%
}

.dropdown-content a {
    color: #333;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content a:hover {
    background-color: rgb(250, 236, 236);

}

.dropdown:hover .dropdown-content {
    display: block;
}

.logIn-icon{
    background-image: url('https://thenounproject.com/api/private/icons/6133542/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 30px;
    height: 30px;
    text-decoration: none;
    margin-left:5px;
    cursor:pointer;
}

        
.search-icon{
    background-image: url('https://thenounproject.com/api/private/icons/6133386/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 30px;
    height: 30px;
    text-decoration: none;
    margin-left:5px;
    cursor:pointer;
}

.shop-icon{
    background-image: url('https://thenounproject.com/api/private/icons/6101231/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 30px;
    height: 30px;
    text-decoration: none;
    margin-left:5px;
    cursor:pointer;
}

a{
    text-decoration: none;
    cursor:pointer;
    color: black;
}

</style>