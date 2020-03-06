import Login from "./components/Login.vue";
import Dashboard from "./components/Dashboard.vue";
import ÜrünEkle from "./components/ÜrünEkle.vue";
import Products from "./components/Products";
import Logout from "./components/Logout.vue";
import fileUpload from "./components/fileUpload.vue";
export const routes = [
  {
    path: "/giris",
    name: "giris",
    component: Login,
    meta: { requiresVisitor: true }
  },
  {
    path: "/anasayfa",
    name: "anasayfa",
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: "/ürünekle",
    name: "ürünekle",
    component: ÜrünEkle,
    meta: { requiresAuth: true }
  },
  {
    path: "/ürünler",
    name: "ürünler",
    component: Products,
    meta: { requiresAuth: true }
  },
  {
    path: "/cikis",
    name: "cikis",
    component: Logout
  },
  {
    path: "/ceviri",
    name: "ceviri",
    component: fileUpload,
    meta: { requiresAuth: true }
  },
  {
    path: "*",
    component: Dashboard,
    meta: { requiresAuth: true }
  }
];
