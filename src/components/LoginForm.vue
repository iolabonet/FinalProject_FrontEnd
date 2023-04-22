<template>
</template>

<script setup>

</script>

<style scoped>
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