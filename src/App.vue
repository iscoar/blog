<script setup>

</script>

<template>
  <nav class="p-2 mt-0 fixed w-full z-10 top-0">
    <ul class="menu menu-horizontal bg-base-100 rounded-box">
      <li>
        <router-link to="/">
          <font-awesome-icon icon="fa-solid fa-house" />
        </router-link>
      </li>
      <li>
        <router-link to="/about">
          <font-awesome-icon icon="fa-solid fa-circle-info" />
        </router-link>
      </li>
      <li>
        <router-link to="/posts">
          <font-awesome-icon icon="fa-solid fa-folder-open" />
        </router-link>
      </li>
      <li>
        <router-link to="/authors">
          <font-awesome-icon icon="fa-solid fa-user-group" />
        </router-link>
      </li>
    </ul>
  </nav>
  <router-view />
</template>
