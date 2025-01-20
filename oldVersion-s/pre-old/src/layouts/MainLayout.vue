<template>
  <OptionsComponent @handle-hide-sidebar="handleHideSidebar" />
  <div id="container-main" :style="containerStyle" :class="gridClass">
    <SidebarComponent :currentPage="currentPage" v-if="!isSingleColumn" />
    <div id="content"><slot name="mainContent" /></div>
  </div>
</template>

<script>
import SidebarComponent from "@/components/SidebarComponent.vue";
import OptionsComponent from "@/components/OptionsComponent.vue";

export default {
  name: "MainLayout",
  components: { SidebarComponent, OptionsComponent },
  props: {
    bgImage: {
      type: String,
      default: require("@/assets/images/GG.png"),
    },
    currentPage: {
      type: String,
    },
    posX: {
      type: String,
      default: "0",
    },
    bgSize: {
      type: String,
      default: "cover",
    },
  },
  data() {
    return {
      isSingleColumn: false,
      isHideSidebar: false
    };
  },
  methods: {
    toggleGrid() {
      console.log("ajsdjasd");
      this.isSingleColumn = !this.isSingleColumn;
    },
    handleHideSidebar(){

    }
  },
  computed: {
    containerStyle() {
      return {
        backgroundImage: `url(${this.bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundPositionX: this.posX,
        backgroundSize: this.bgSize,
      };
    },
    gridClass() {
      return this.isSingleColumn ? "single-column" : "two-column";
    },
    hideSidebar(){
      return this.isHideSidebar ? ""
    }
  },
};
</script>

<style scoped>
#container-main {
  height: 100vh;
  display: grid;
  max-width: 100%;
  width: 100%;
}

.single-column {
  grid-template-columns: 1fr;
}

.two-column {
  grid-template-columns: 12.5% 87.5%;
}

#content {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0 50px;
}

@media all and (max-width: 1200px) {
  #container-main {
    grid-template-columns: 25% 75%;
  }

  #content {
    padding: 25px 25px;
  }
}
</style>
