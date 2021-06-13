<template>
  <div>
      <router-view></router-view>
  </div>
</template>
<style >
  #nprogress .bar {
  background: #E0E0E0 !important;
  height: 3px !important;
  }
  #nprogress .peg {
    box-shadow: 0 0 10px #E0E0E0, 0 0 5px #E0E0E0 !important;
  }
  #nprogress .spinner{
    display: none !important;
  }
</style>
