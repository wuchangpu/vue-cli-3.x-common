<template>
  <transition-group name="loading">
    <div class="loading-static" key="loading" v-show="visible">
      <div class="loading-static-img">
        <img alt="loading" src="data:image/png;base64,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" >
      </div>
    </div>

    <div class="loading-mask" v-show="visible" @touchmove.stop.prevent key="mask"></div>
  </transition-group>
</template>
<script>
  export default {
    name: 'loading',
    data () {
      return {
        visible: false
      }
    }
  }
</script>
<style scoped>

.loading-mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 3999;
}

.loading-enter,
.loading-leave-active {
  opacity: 0;
}

.loading-static {
  position: fixed;
  top: 50%;
  right: 0;
  bottom: 50%;
  left: 0;
  z-index: 4000;

  text-align: center;
  font-size: 14px;
  color: #999;
}

.loading-static-img {
  margin: 0 auto;
  position: relative;
  width: 26px;
  height: 26px;
  overflow: hidden;
  margin-bottom: 6px;
}

.loading-static-img img {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  animation: rotate 1s linear infinite;
}
@keyframes rotate {
  from { transform: rotate(0deg); }
  50% { transform: rotate(180deg); }
  to { transform: rotate(360deg); }
}

</style>
