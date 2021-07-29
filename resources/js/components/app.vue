<template>
  <div>
   
      <router-view></router-view>
  </div>
</template>
<script>


export default {

 /*  beforeMount(){
    window.addEventListener('contextmenu', function (e) { 
      // do something here... 
      e.preventDefault(); 
    }, false);
  } */
}
</script>
<style >
  #nprogress .bar {
  background: #2196F3 !important;
  height: 2px !important;
  }
  #nprogress .peg {
    box-shadow: 0 0 10px #2196F3, 0 0 5px #2196F3 !important;
  }
  #nprogress .spinner{
    display: none !important;
  }
</style>
