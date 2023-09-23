<template>
<div class="footer">
        <p class="love-message">We would love to hear from you</p>
        <ul class="social-media">
            <li class="social-facebook" ><a href="#"></a></li>
            <li class="social-instagram"><a href="#"></a></li>
            <li class="social-pinterest" ><a href="#"></a></li>
        </ul>
        <div class="copy-rights">
            <p>Derechos reservados a Magic.pop 2023</p>
            <div class="mr"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterMayic',
    }

</script>

<style>
.footer{
    background-color: rgb(250, 236, 236);
    padding:40px;
}
.love-message{
    text-align: center;
}

.social-media{
    display: flex;
    list-style-type:none;
    justify-content: center;
    margin-right: 10px;
    padding: 0;
}

.social-media li{
    margin:10px;
}

.social-facebook{
    background-image: url('https://cdn-icons-png.flaticon.com/512/2175/2175193.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 30px;
    height: 30px;
    margin: auto;
    cursor:pointer;
}

.social-instagram{
    background-image: url('https://vectorified.com/images/instagram-icon-for-business-card-13.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 32px;
    height: 32px;
    margin: auto;
    cursor:pointer;
}

.social-pinterest{
    background-image: url('https://seeklogo.com/images/P/pinterest-logo-E994F3A9FB-seeklogo.com.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 30px;
    height: 30px;
    margin: auto;
    cursor:pointer;
}


.copy-rights{
    text-align: center;
    display: flex;
    justify-content: center;  
}

.mr{
    width: 10px;
    height: 10px;
    display: flex;
    background-image: url('https://thenounproject.com/api/private/icons/62294/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    margin:2px;
}


</style>