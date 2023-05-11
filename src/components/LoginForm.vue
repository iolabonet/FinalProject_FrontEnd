<!-- Feature: TO DO: Create an account: OK -->
<!-- Feature: TO DO: Log in to the app: OK! -->
<!-- Feature: TO DO: Log Out: OK! -->

<template>
  <div class="login-page">
    <transition>
      <div v-if="!registerActive" class="wallpaper-login"></div>
    </transition>
    <div class="wallpaper-register"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
          <div v-if="!registerActive" class="card login" v-bind:class="{ error: emptyFields }">
            <h1>Log In</h1>
            <form class="form-group">
              <input
                v-model="emailLogin"
                type="email"
                class="form-control"
                placeholder="Email"
                required
              />
              <input
                v-model="passwordLogin"
                type="password"
                class="form-control"
                placeholder="Password"
                required
              />
              <button type="button" class="btn btn-primary" @click="doLogin">Log In</button>
              <p>
                Don't have an account?
                <a href="#" @click=";(registerActive = !registerActive), (emptyFields = false)">
                  Sign up here</a
                >
              </p>
            </form>
          </div>

          <div v-else class="card register" v-bind:class="{ error: emptyFields }">
            <h1>New user</h1>
            <form class="form-group">
              <input
                v-model="emailReg"
                type="email"
                class="form-control"
                placeholder="Email"
                required
              />
              <input
                v-model="passwordReg"
                type="password"
                class="form-control"
                placeholder="Password"
                required
              />
              <input
                v-model="confirmReg"
                type="password"
                class="form-control"
                placeholder="Confirm Password"
                required
              />
              <button type="button" class="btn btn-primary" @click="doRegister">Register</button>
              <p>
                Already have an account?
                <a href="#" @click=";(registerActive = !registerActive), (emptyFields = false)"
                  >Sign in here</a
                >
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useUserStore from '@/stores/user'
import { mapActions } from 'pinia'
export default {
  name: 'LoginForm',
  data() {
    return {
      emailLogin: '',
      passwordLogin: '',
      emailReg: '',
      passwordReg: '',
      confirmReg: '',
      emptyFields: false,
      errorMessage: ''
    }
  },
  props: {
    registerActive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    ...mapActions(useUserStore, ['signIn', 'signUp']),
    async doLogin() {
      if (this.emailLogin === '' || this.passwordLogin === '') {
        this.emptyFields = true
      } else {
        await this.signIn(this.emailLogin, this.passwordLogin)
        this.$router.push({
          name: 'tasks'
        })
      }
    },
    click(event) {
      event.preventDefault()
      console.log(event)
    },
    validateEmail(email) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        this.errorMessage = ''
      } else {
        this.errorMessage = 'Invalid Email'
      }
    },
    async doRegister() {
      if (this.emailReg === '' || this.passwordReg === '' || this.confirmReg === '') {
        this.emptyFields = true
      } else {
        await this.signUp(this.emailReg, this.passwordReg)
        this.$router.push({
          name: 'tasks'
        })
      }
    }
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
  gap: 2vh;
}

.form-group {
  height: 70%;
}

.btn-primary {
  margin-top: 25px;
  border: 0px;
  background-color: #072ac8;
  color: #ffffff;
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

h1 {
  margin-bottom: 1.5rem;
}

.error {
  animation-name: errorShake;
  animation-duration: 0.4s;
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

/*MOBILE*/
@media (max-width: 767px) {
  .card {
    width: auto;
  }
}

/*TABLET*/
@media (min-width: 768px) and (max-width: 1023px) {
}

/*MOBILE Y TABLET*/
@media (max-width: 1023px) {
}
</style>
