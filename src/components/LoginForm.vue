<!-- Feature: Create an account  
  
Scenario: As a user, I want to create an account
  
  Then I expect to be shown a warning that instructs me to confirm my email address by clicking a link in an email
  And I click the link provided in the email
  Then I expect to be logged in to the app 
  And I expect to see the home screen -->

<!-- Scenario: As a user, I want to log in to the app
  When I visit the login page
  And I enter my email as "test@example.co.uk"
  And I enter my password as "****"
  And I click the Log In button
  Then I expect to be logged in to the app 
  And I expect to see the home screen  -->

<template>
  <!-- https://codepen.io/rpandrews/pen/XWbjJEg -->
  <div class="login-page">
    <transition>
      <div v-if="!registerActive" class="wallpaper-login"></div>
    </transition>
    <div class="wallpaper-register"></div>
<!-- TO DO: Class=wallpaper, sino se usan, borrar! -->
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
          <div v-if="!registerActive" class="card login" v-bind:class="{ error: emptyFields }">
            <h1>Log In</h1>
            <form class="form-group">
              <input v-model="emailLogin" type="email" class="form-control" placeholder="Email" required>
              <input v-model="passwordLogin" type="password" class="form-control" placeholder="Password" required>
              <button type="button" class="btn btn-primary" @click="doLogin">Log In</button>
              <p>Don't have an account? <a href="#" @click="registerActive = !registerActive, emptyFields = false">Sign
                  up here</a>
              </p>
              <!-- <p><a href="#">Forgot your password?</a></p> -->
            </form>
          </div>

          <div v-else class="card register" v-bind:class="{ error: emptyFields }">
            <h1>New user</h1>
            <form class="form-group">
              <input v-model="emailReg" type="email" class="form-control" placeholder="Email" required>
              <input v-model="passwordReg" type="password" class="form-control" placeholder="Password" required>
              <input v-model="confirmReg" type="password" class="form-control" placeholder="Confirm Password" required>
              <button type="button" class="btn btn-primary" @click="doRegister">Register</button>
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
import useUserStore from '@/stores/user';
import { mapActions } from 'pinia';
export default {
  name: 'LoginForm',
  data() {
    return {
      emailLogin: "",
      passwordLogin: "",
      emailReg: "",
      passwordReg: "",
      confirmReg: "",
      emptyFields: false,
      // errorMessage: ''
    }
  },
  props: {
    registerActive: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    ...mapActions(useUserStore, ['signIn', 'signUp']),
    async doLogin() {
      if (this.emailLogin === "" || this.passwordLogin === "") {
        this.emptyFields = true;
      } else {
        await this.signIn(this.emailLogin, this.passwordLogin)
        this.$router.push({
          name: 'tasks'
        })
      }
    },
    // click(event) {
    //   event.preventDefault()
    //   console.log(event)
    // },
    // validateEmail(email) {
    //   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    //     this.errorMessage = ''
    //   } else {
    //     this.errorMessage = 'Invalid Email';
    //   }
    // },
    async doRegister() {
      if (this.emailReg === "" || this.passwordReg === "" || this.confirmReg === "") {
        this.emptyFields = true;
      } else {
        await this.signUp(this.emailReg, this.passwordReg)
        this.$router.push({
          name: 'tasks'
        })
      }
    },
  },

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
  border: 0px;
  background-color: #072AC8;
  color: #FFFFFF;
  text-decoration: none;
  font-size: 17px;
  font-weight: 500px;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
  padding: 15px 36px;
}

.login-page {
  margin-top: 5vh;
  align-items: center;
  display: flex;
  height: 50vh;
  cursor: url(../assets/images/myHand.png);
}

/* .warning {
  border: 2px solid #f39389;
  border-radius: 2px;
  padding: 10px;
  position: absolute;
  background-color: #fbd8d4;
  color: #3b3c40;
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