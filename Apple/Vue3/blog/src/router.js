// 라이브러리 불러오기
import { createWebHistory, createRouter } from "vue-router";
// 컴포넌트 불러오기
import Home from "./components/ComHome.vue";
import List from "./components/ComList.vue";
import Detail from "./components/ComDetail.vue";

// 경로를 정의하고, 각 경로를 컴포넌트와 매핑.
const routes = [
  {
    path: "/Detail/:id",
    component: Detail
  },
  {
    path: "/List",
    component: List
  },
  {
    path: "/",
    component: Home
  },
];

// 위에 만든 `routes`변수를 전달해 라우터 인스턴스를 생성.
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 