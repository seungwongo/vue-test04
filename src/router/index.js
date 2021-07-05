import {
  createRouter,
  createWebHashHistory
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
import RenderingIf from "../views/RenderingIf.vue";
import EventBinding from "../views/EventBinding.vue";
import Vending from "../views/Vending.vue";
import UserList from "../views/UserList.vue";


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
  history: createWebHashHistory(),
  routes,
});

export default router;