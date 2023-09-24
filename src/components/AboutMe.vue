<template>
    <div class="main">
    <h3 class="tittle">ABOUT US</h3>
    <div class="main-content">
        <section class="left-photo"></section>
        <section class="text-content">
            <div>
                <p>Mayic.pop Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ex harum assumenda alias quia cumque cupiditate laborum rerum quam temporibus eum debitis in necessitatibus corrupti repellat minus hic, dolorem natus Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ipsum soluta, praesentium itaque hic reiciendis, saepe dicta quos nesciunt necessitatibus debitis quis quisquam culpa ullam aliquam consectetur, obcaecati a. Eligendi.!</p>
                <br>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, suscipit et reiciendis explicabo ad enim! Odio quisquam eius earum delectus at praesentium, a ducimus? Quae ut reiciendis aspernatur a! Obcaecati.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, repudiandae quod, voluptatem quo tenetur accusamus, cumque libero tempora quas itaque laborum dolore dolorem vitae esse modi mollitia pariatur sint rem?</p>
                <br>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum at deleniti debitis rem veniam quod praesentium quam laborum perferendis ut delectus cum, sed dolores dolor id doloremque fugiat voluptates officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis repellat, eos numquam quaerat ullam eveniet? Necessitatibus nesciunt quia, aut vero provident optio tempora pariatur aliquam eligendi itaque nostrum, perferendis expedita.lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde ea itaque reprehenderit corrupti, saepe doloremque, odit totam veniam quos rerum maxime quibusdam, nihil minus sint ad. Amet quibusdam ipsum similique! </p>
                <br>
                <p class="firma">Con amor, Adri C.</p>
            </div>
        </section>
    </div>
    </div>
</template>

<script>
export default {
    name: 'AboutMe',
    props: {
        msg:String
    }
}
</script>

<style scoped>
    h3{
    font-size:30px;
    text-align: center;
    margin: 50px;
}

.main-content{
    width: 80%;
    margin:auto;
    display:flex;
    margin-bottom:200px;
}

.left-photo{
    /* background-color: blueviolet; */
    background-image: url('https://i.pinimg.com/564x/2b/0a/9f/2b0a9ffde6508b92f7c1cf6414cdb7bb.jpg');
    background-size: cover; 
    background-repeat: no-repeat; 
    background-position: center;
    width: 50%;
    height: 500px;
    display:flex;
    margin-right: 10px;
}

.text-content{
    width: 50%;
    display:flex;
    text-align: justify;
    margin-left: 10px;
}

.firma{
    text-align: right;
}

</style>