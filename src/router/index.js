import {
  createRouter,
  createWebHistory
} from "vue-router";
import Home from "../views/Home.vue";
import DataBindingHtml from "../views/DataBindingHtml.vue";
import DataBindingInputText from "../views/DataBindingInputText.vue";
import DataBindingTextarea from "../views/DataBindingTextarea.vue";
import DataBindingSelect from "../views/DataBindingSelect.vue";
import DataBindingCheckbox from "../views/DataBindingCheckbox.vue";
import DataBindingRadio from "../views/DataBindingRadio.vue";
import DataBindingAttribute from "../views/DataBindingAttribute.vue";
import DataBindingButton from "../views/DataBindingButton.vue";
import DataBindingClass from "../views/DataBindingClass.vue";
import DataBindingClass2 from "../views/DataBindingClass2.vue";
import DataBindingStyle from "../views/DataBindingStyle.vue";
import DataBindingList from "../views/DataBindingList.vue";
import DataBindingList2 from "../views/DataBindingList2.vue";
import DataBindingList3 from "../views/DataBindingList3.vue";
import RenderingIf from "../views/RenderingIf.vue";
import EventBinding from "../views/EventBinding.vue";
import Vending from "../views/Vending.vue";
import UserList from "../views/UserList.vue";
import Computed from "../views/Computed.vue";
import Watch from "../views/Watch.vue";
import Restaurant from "../views/Restaurant.vue";
import NestedComponent from "../views/NestedComponent.vue";
import NestedComponent2 from "../views/NestedComponent2.vue";
import NestedComponent3 from "../views/NestedComponent3.vue";
import NestedComponent4 from "../views/NestedComponent4.vue";
import NestedComponent5 from "../views/NestedComponent5.vue";
import Parent from "../views/Parent.vue";
import Parent2 from "../views/Parent2.vue";
import SlotUseModalLayout from "../views/SlotUseModalLayout.vue";
import ProvideInject from "../views/ProvideInject.vue";
import LoginAccess from "../views/LoginAccess.vue";
import Login from "../views/Login.vue";
import KakaoLogin from "../views/KakaoLogin.vue";
import KakaoLogin2 from "../views/KakaoLogin2.vue";
import NaverLogin from "../views/NaverLogin.vue";
import StoreAccess from "../views/StoreAccess.vue";
import BootstrapTest from "../views/BootstrapTest.vue";


const routes = [{
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/databindinghtml",
    name: "DataBindingHtml",
    component: DataBindingHtml,
  },
  {
    path: "/databindinginputtext",
    name: "DataBindingInputText",
    component: DataBindingInputText,
  },
  {
    path: "/databindingarea",
    name: "DataBindingTextarea",
    component: DataBindingTextarea,
  },
  {
    path: "/databindingselect",
    name: "DataBindingSelect",
    component: DataBindingSelect,
  },
  {
    path: "/databindingcheckbox",
    name: "DataBindingCheckbox",
    component: DataBindingCheckbox,
  },
  {
    path: "/databindingradio",
    name: "DataBindingRadio",
    component: DataBindingRadio,
  },
  {
    path: "/databindingattribute",
    name: "DataBindingAttribute",
    component: DataBindingAttribute,
  },
  {
    path: "/databindingbutton",
    name: "DataBindingButton",
    component: DataBindingButton,
  },
  {
    path: "/databindingclass",
    name: "DataBindingClass",
    component: DataBindingClass,
  },
  {
    path: "/databindingclass2",
    name: "DataBindingClass2",
    component: DataBindingClass2,
  },
  {
    path: "/databindingstyle",
    name: "DataBindingStyle",
    component: DataBindingStyle,
  },
  {
    path: "/databindinglist",
    name: "DataBindingList",
    component: DataBindingList,
  },
  {
    path: "/databindinglist2",
    name: "DataBindingList2",
    component: DataBindingList2,
  },
  {
    path: "/databindinglist3",
    name: "DataBindingList3",
    component: DataBindingList3,
  },
  {
    path: "/renderingif",
    name: "RenderingIf",
    component: RenderingIf,
  },
  {
    path: "/eventbinding",
    name: "EventBinding",
    component: EventBinding,
  },
  {
    path: "/vending",
    name: "Vending",
    component: Vending,
  },
  {
    path: "/userlist",
    name: "UserList",
    component: UserList,
  },
  {
    path: "/computed",
    name: "Computed",
    component: Computed,
  },
  {
    path: "/watch",
    name: "Watch",
    component: Watch,
  },
  {
    path: "/restaurant",
    name: "Restaurant",
    component: Restaurant,
  },
  {
    path: "/nested",
    name: "NestedComponent",
    component: NestedComponent,
  },
  {
    path: "/nested2",
    name: "NestedComponent2",
    component: NestedComponent2,
  },
  {
    path: "/nested3",
    name: "NestedComponent3",
    component: NestedComponent3,
  },
  {
    path: "/nested4",
    name: "NestedComponent4",
    component: NestedComponent4,
  },
  {
    path: "/nested5",
    name: "NestedComponent5",
    component: NestedComponent5,
  },
  {
    path: "/parent",
    name: "Parent",
    component: Parent,
  },
  {
    path: "/parent2",
    name: "Parent2",
    component: Parent2,
  },
  {
    path: "/slot",
    name: "SlotUseModalLayout",
    component: SlotUseModalLayout,
  },
  {
    path: "/provideinject",
    name: "ProvideInject",
    component: ProvideInject,
  },
  {
    path: "/loginaccess",
    name: "LoginAccess",
    component: LoginAccess,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/kakaologin",
    name: "KakaoLogin",
    component: KakaoLogin,
  },
  {
    path: "/kakaologin2",
    name: "KakaoLogin2",
    component: KakaoLogin2,
  },
  {
    path: "/naverlogin",
    name: "NaverLogin",
    component: NaverLogin,
  },
  {
    path: "/storeaccess",
    name: "StoreAccess",
    component: StoreAccess,
  },
  {
    path: "/bootstraptest",
    name: "BootstrapTest",
    component: BootstrapTest,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   component: About,
  // },
  // {
  //   path: "/databinding",
  //   name: "DataBinding",
  //   component: DataBinding,
  // },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/databinding",
    name: "DataBinding",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackPrefetch:true, webpackChunkName: "databinding" */ "../views/DataBinding.vue"),
  }
];

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes,
});

export default router;