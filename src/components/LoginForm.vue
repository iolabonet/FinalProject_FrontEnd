<!-- Feature: Create an account  
  Background: As a new user, I want to register with the to-do app
    Given I do not have an account

Scenario: As a user, I want to create an account
  When I visit the signup page
  And I set the email to "test@example.co.uk"
  And I set a password to "****"
  And I set confirmPassword to "****"
  And I click the register button
  Then I expect to be shown a warning that instructs me to confirm my email address by clicking a link in an email
  And I click the link provided in the email
  Then I expect to be logged in to the app 
  And I expect to see the home screen -->

<!-- Feature: Log in to the app
  Background: As a user, I want to log in to the to-do app
  Given I already have an account

Scenario: As a user, I want to log in to the app
  When I visit the login page
  And I enter my email as "test@example.co.uk"
  And I enter my password as "****"
  And I click the Log In button
  Then I expect to be logged in to the app 
  And I expect to see the home screen -->

<template>
  <!-- https://codepen.io/rpandrews/pen/XWbjJEg -->
  <div class="login-page">
    <transition name="fade">
      <div v-if="!registerActive" class="wallpaper-login"></div>
    </transition>
    <div class="wallpaper-register"></div>

    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
          <div v-if="!registerActive" class="card login" v-bind:class="{ error: emptyFields }">
            <h1>Sign In</h1>
            <form class="form-group">
              <input v-model="nikName" type="text" class="form-control" placeholder="NikName" required>
              <input v-model="emailLogin" type="email" class="form-control" placeholder="Email" required>
              <input v-model="passwordLogin" type="password" class="form-control" placeholder="Password" required>
              <input type="submit" class="btn btn-primary" @click="doLogin">
              <p>Don't have an account? <a href="#" @click="registerActive = !registerActive, emptyFields = false">Sign
                  up here</a>
              </p>
              <p><a href="#">Forgot your password?</a></p>
            </form>
          </div>

          <div v-else class="card register" v-bind:class="{ error: emptyFields }">
            <h1>Sign Up</h1>
            <form class="form-group">
              <input v-model="nikName" type="text" class="form-control" placeholder="NikName" required>
              <input v-model="emailReg" type="email" class="form-control" placeholder="Email" required>
              <input v-model="passwordReg" type="password" class="form-control" placeholder="Password" required>
              <input v-model="confirmReg" type="password" class="form-control" placeholder="Confirm Password" required>
              <input type="submit" class="btn btn-primary" @click="doRegister">
              <p>Already have an account? <a href="#" @click="registerActive = !registerActive, emptyFields = false">Sign
                  in here</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <button class="btnForm" @click="userId = !userId">User</button>
              <h1 v-if="awesome">User exists!</h1>
              <h1 v-else>Oh no 😢</h1> -->
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      emailLogin: "",
      passwordLogin: "",
      emailReg: "",
      passwordReg: "",
      confirmReg: "",
      emptyFields: false
    }
  },
  props: {
    registerActive: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    doLogin() {
      if (this.emailLogin === "" || this.passwordLogin === "") {
        this.emptyFields = true;
      } else {
        alert("You are now logged in");
      }
    },

    doRegister() {
      if (this.emailReg === "" || this.passwordReg === "" || this.confirmReg === "") {
        this.emptyFields = true;
      } else {
        alert("You are now registered");
      }
    },
  }
}

</script>

<style scoped>
p {
  line-height: 1rem;
  margin-top: 25px;
}

.card {
  width: 44vh;
  height: 50vh;
  padding: 20px;
  background-color: rgb(51, 197, 197);
}

div.card.register {
  gap: 2vh
}

.form-group {
  height: 70%;
  
}
.btn-primary {
  margin-top: 25px;
}

.login-page {
  margin-top: 5vh;
  align-items: center;
  display: flex;
  height: 50vh;
  cursor: url(../assets/images/myHand.png);
}
   /* .wallpaper-register {
    background: url(https://images.pexels.com/photos/533671/pexels-photo-533671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) no-repeat center center;
    height: 80em;
    position: absolute;
    width: 80em;
    z-index: -1;
  } */

  h1 {
    margin-bottom: 1.5rem;
  }

.error {
  animation-name: errorShake;
  animation-duration: 0.3s;
}

@keyframes errorShake {
  0% {
    transform: translateX(-25px);
  }

  25% {
    transform: translateX(25px);
  }

  50% {
    transform: translateX(-25px);
  }

  75% {
    transform: translateX(25px);
  }

  100% {
    transform: translateX(0);
  }
}

@import url('bootstrap/dist/css/bootstrap.min.css');

/*MOBILE*/
@media (max-width: 767px) {}

/*TABLET*/
@media (min-width: 768px) and (max-width: 1023px) {}

/*MOBILE Y TABLET*/
@media (max-width: 1023px) {}
</style>

<!-- TO DO: Un FORM pasandole una prop como objeto configurando el mail de tipo string, con una contraseña y que una vez cazado 
el mail y el usuario lo lanze para arriba con un evento -->