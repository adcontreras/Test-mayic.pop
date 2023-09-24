<template>
    <div id="container">
        <nav class="navbar">
            <ul class="nav-right-section">
                <li class="logo-icon"><router-link to="/"><img src="../assets/Logo-MP-1.png" alt=""></router-link></li>   
                <li class="notification-icon"></li>
            </ul>

            <ul class="nav-left-section">
                <li class="nav-link"><router-link to="/">Home</router-link></li>
                <li class="nav-link"><router-link to="/about">About</router-link></li>
                <li class="nav-link"><router-link to="/shop">Shop</router-link></li>
                <li class="options-icon"><router-link to="/shop"></router-link></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    }

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

.logo-icon{
    display: flex;
    height: 40px;
}
.logo-icon img{
    display: flex;
    width: 35px;
}
.nav-right-section{
    display: flex;
    align-items: center;
}

.nav-left-section{
    display: flex;
    align-items: center;
}

.nav-left-section li{
    list-style-type:none;
    padding: 0;
    font-size: 13px;
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

</style>