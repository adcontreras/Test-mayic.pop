<template>
    <div class="main">
        <div class="container">
            <h3>Log In</h3>
            <input type="email" name="email" id="email">
            <input type="password" name="password" id="password">
            <button>Sign in</button>
            <router-link to="/shop">  <p>Return to store</p></router-link>
          
            <p>Create account</p>
            <p>Forgot your password?</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LogIn',
    props: {
        msg:String
    }
}
</script>

<style scoped>
   .main{
    width: 100%;
    height: 700px;
    display:flex;
}
.container{
    background-color: rgb(250, 236, 236);
    width: 40%;
    height: 60%;
    margin:auto;
    padding: 20px; 
    text-align: center; 
    border-radius: 30px;
}

h3{
    display:flex;
    justify-content: center;
    margin: 20px;
}

input[type="email"],
input[type="password"] {
    width: 100%; 
    margin-bottom: 15px; 
    padding: 10px;
    border: 1px solid #ccc; 
    border-radius: 5px; 
}

button {
    width: 100%; 
    padding: 10px; 
    background-color: black; 
    color: #fff; 
    border: none; 
    border-radius: 5px; 
    cursor: pointer; 
}

p {
    margin: 15px 0; 
    cursor:pointer;
}
</style>