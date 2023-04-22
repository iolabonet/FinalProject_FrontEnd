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

<template>  
  <div>
    <b-form  @submit.stop.prevent>
      <label for="feedback-user">User ID</label>
      <b-form-input v-model="userId" :state="validation" id="feedback-user"></b-form-input>
      <b-form-invalid-feedback :state="validation">
        Your user ID must be 5-12 characters long.
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="validation">
        Looks Good.
      </b-form-valid-feedback>
     </b-form>

    <button class="btnForm" @click="userId = !userId">User</button>
    <h1 v-if="awesome">User exists!</h1>
    <h1 v-else>Oh no 😢</h1>

  </div>

</template>

<script>
export default {
    data() {
      return {
        userId: ''
      }
    },
    computed: {
      validation() {
        return this.userId.length > 4 && this.userId.length < 13
      }
    }
  }
</script>

<style scoped>
@import url('bootstrap/dist/css/bootstrap.min.css0');

.formContact {
  width: 611px;
  height: 80px;
  display: flex;
  margin-top: 50px;
}

.formMail {
  color: #FFFFFF;
  width: 100%;
  height: 80px;
}

.boxMail {
  display: flex;
  width: 393px;
  height: 80px;
  border: 0px;
  text-align: left;
  padding-left: 50px;
}

#formContact {
  width: 90%;
  background-image: url(./Assets/newsletter/icon/mail.svg);
  background-size: 30px;
  background-repeat: no-repeat;
  text-align: left;
  background-position: left;
}

input {
  text-align: left;
  padding-left: 75px;
}

.btnForm {
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


/*MOBILE*/
@media (max-width: 767px) {}

/*TABLET*/
@media (min-width: 768px) and (max-width: 1023px) {}

/*MOBILE Y TABLET*/
@media (max-width: 1023px) {}
</style>

<!-- TO DO: Un FORM pasandole una prop como objeto configurando el mail de tipo string, con una contraseña y que una vez cazado 
el mail y el usuario lo lanze para arriba con un evento -->