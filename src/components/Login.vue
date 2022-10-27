<template>  
    <div class="login-form">
        <form>
          <h1> {{storeLogin.isShow ? 'Login' : 'Register'}} </h1>
          <div class="content">
         
            <div class="input-field">
              <ValidationProvider rules="required|alpha_num|min:1 " v-slot="{ errors }">
              <input type="text"  placeholder="Username" autocomplete="nope" v-model="userCopy.username">
              <span style="color: red;" id="error">{{ errors[0] }}</span>
             </ValidationProvider>
              </div>
            <div class="input-field">
              <ValidationProvider rules="required|min:1 " v-slot="{ errors }">                         
              <input type="password"  placeholder="Password" autocomplete="new-password" v-model="userCopy.password">
              <span style="color: red;" id="error">{{ errors[0] }}</span>            
            </ValidationProvider>
            </div>
            <a href="#" class="link text-danger"  @click="storeLogin.isShow = false">Đăng Ký Account ?</a>
            <br/>
            <a href="#" class="link text-success"  @click="storeLogin.isShow = true">Đã có Account ?</a>
          </div>
          <div class="action">
            <button @click="() => storeLogin.handeleRegister(userCopy)"  >Register</button>
            <button   @click="() => storeLogin.fetchUsers(userCopy)" >
                  Login
            </button>
          </div>
        </form>
      </div>
</template>

<script>

import {useLogin} from '../store/useLogin'
import { ValidationProvider } from 'vee-validate';

export default {
    name: 'DemoLogin',
    components: {
    ValidationProvider
  } ,

    setup() {

     const storeLogin = useLogin() ; 

      const userCopy = {
        username : "" , 
        password : "" ,
      }

      return {userCopy ,storeLogin  }

    }

  
};
</script>


<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
  
  body {
    background: #e35869;
    font-family: 'Rubik', sans-serif;
  }
  
  .login-form {
    background: #fff;
    width: 500px;
    margin: 65px auto;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
            flex-direction: column;
    border-radius: 4px;
    box-shadow: 0 2px 25px rgba(0, 0, 0, 0.2);
  }
  .login-form h1 {
    padding: 35px 35px 0 35px;
    font-weight: 300;
  }
  .login-form .content {
    padding: 35px;
    text-align: center;
  }
  .login-form .input-field {
    padding: 12px 5px;
  }
  .login-form .input-field input {
    font-size: 16px;
    display: block;
    font-family: 'Rubik', sans-serif;
    width: 100%;
    padding: 10px 1px;
    border: 0;
    border-bottom: 1px solid #747474;
    outline: none;
    -webkit-transition: all .2s;
    transition: all .2s;
  }
  .login-form .input-field input::-webkit-input-placeholder {
    text-transform: uppercase;
  }
  .login-form .input-field input::-moz-placeholder {
    text-transform: uppercase;
  }
  .login-form .input-field input:-ms-input-placeholder {
    text-transform: uppercase;
  }
  .login-form .input-field input::-ms-input-placeholder {
    text-transform: uppercase;
  }
  .login-form .input-field input::placeholder {
    text-transform: uppercase;
  }
  .login-form .input-field input:focus {
    border-color: #222;
  }
  .login-form a.link {
    text-decoration: none;
    color: #747474;
    letter-spacing: 0.2px;
    text-transform: uppercase;
    display: inline-block;
    margin-top: 20px;
  }
  .login-form .action {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
            flex-direction: row;
  }
  .login-form .action button {
    width: 100%;
    border: none;
    padding: 18px;
    font-family: 'Rubik', sans-serif;
    cursor: pointer;
    text-transform: uppercase;
    background: #e8e9ec;
    color: #777;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 0;
    letter-spacing: 0.2px;
    outline: 0;
    -webkit-transition: all .3s;
    transition: all .3s;
  }
  .login-form .action button:hover {
    background: #d8d8d8;
  }
  .login-form .action button:nth-child(2) {
    background: #2d3b55;
    color: #fff;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 4px;
  }
  .login-form .action button:nth-child(2):hover {
    background: #3c4d6d;
  }
</style>