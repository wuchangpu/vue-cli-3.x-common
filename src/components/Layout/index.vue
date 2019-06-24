<template>
  <div class="layout">
    <my-header></my-header>
    <slot></slot>
    <my-footer></my-footer>
  </div>
</template>

<script>
import myHeader from './header';
import myFooter from './footer';

export default {
  components: {
    myHeader,
    myFooter,
  },
  data(){
    return {}
  },
}
</script>

<style lang="scss" scoped>
.layout{}
</style>
