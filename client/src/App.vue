<template>
  <div id="app">
    <Navbar v-if="isLogged" />
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    Navbar
  },
  data() {
    return {
      product: {
        name: "",
        price: "",
        data: "test",
        type: [],
        resource: "",
        desc: "",
        size: ""
      },
      isCollapse: true,
      result: "deneme",
      camera: "auto",
      showCamera: false
    };
  },
  computed: {
    ...mapState(["isLogged"])
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },

    onSubmit() {
      console.log("submit!");
    },
    onDecode(result) {
      this.result = result;
      this.turnCameraOff();
    },
    turnCameraOn() {
      this.camera = "auto";
      this.showCamera = true;
    },
    turnCameraOff() {
      this.camera = "off";
      this.showCamera = true;
    }
  },
  created() {}
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Dosis", sans-serif;
}

/* farklı animasyonlar kullanabilirsiniz css ile*/
/* animasyon cssleri.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.bg-color {
  background-color: rgb(21, 32, 43) !important;
}
</style>
