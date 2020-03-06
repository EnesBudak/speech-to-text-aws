<template >
  <el-row>
    <el-col :span="24">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="0">
          <h3>{{ getCompanyName}}</h3>
        </el-menu-item>
        <el-menu-item index="1" @click="$router.push('anasayfa')">Dashboard</el-menu-item>
        <!-- <el-menu-item index="2" @click="$router.push('ürünekle');">Ürün Ekleme</el-menu-item>
        <el-menu-item index="3">Change Name</el-menu-item>
        <el-menu-item index="4">
          <a href="#">Orders</a>
        </el-menu-item>
        <el-menu-item index="5" style="float:right" @click="logout">Çıkış</el-menu-item>
        <el-menu-item index="6" @click="$router.push('ürünler');">Ürünler</el-menu-item>-->
        <el-menu-item index="7" @click="$router.push('ceviri');">Çeviri</el-menu-item>
      </el-menu>
      <div class="line"></div>
    </el-col>
  </el-row>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    // handleSelect(key, keyPath) {
    //   // console.log(key, keyPath);
    // },

    logout() {
      this.$store
        .dispatch("LOGOUT")
        .then(success => {
          console.log(success);
          this.$router.push("/giris");
        })
        .catch(error => {
          if (error) console.log(error);
        });
    }
  },
  computed: {
    ...mapGetters(["getCompanyName"])
  },
  created() {}
};
</script>

<style>
</style>