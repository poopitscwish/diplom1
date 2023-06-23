<template>

  <nav class="navbar navbar-expand-md navbar-dark bg-primary mb-4">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">  <i class="fa-light fa-icicles" style="color: #ffffff;"></i></router-link>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <router-link to="/orders" class="navbar-brand">Активные заказы</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/schedule" class="navbar-brand">Клиенты</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/total" class=" navbar-brand">Оборудование</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/test" class="navbar-brand">История заказов</router-link>
          </li>

        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/login" class="navbar-brand" >Войти</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="navbar-brand" >Регистрация</router-link>
          </li>
          <li class="nav-item">
            <a href="/login" class="navbar-brand">Выйти</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script lang="ts">

</script>

<style>
/* #home{
    color: aliceblue;
} */
</style>

-