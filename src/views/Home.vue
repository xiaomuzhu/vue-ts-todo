<template>
  <main class="home">
    <TodoItem />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TodoItem from "../components/TodoItem.vue";
import Header from "../components/Header.vue";

@Component({
  components: {
    TodoItem,
    Header
  }
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
}
</style>
