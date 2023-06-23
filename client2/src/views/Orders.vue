<template>
  <div class="row">
    <table>
      <thead>
      <tr>
        <th v-for="(head, index) in headers" :key="index" class="p-5 font">
          {{ head}}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>

        </td>
      </tr>
      </tbody>
    </table>
  </div>



</template>

<script setup>
// import {onBeforeMount} from "vue";

const headers = {head1:"#",
  head2:"Клиент",
  head3:"Оборудование",
  head4:"Дней",
  head5:"Стоимость",
  head6:"Итого",}

</script>

<style scoped>
.font{
  font-size: large;
}
</style>