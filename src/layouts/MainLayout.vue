<template>
  <section id="container-main" :class="compGridLayout">
    <side-bar></side-bar>
    <section id="side-right">
      <top-navigator :page-title="pageTitle"></top-navigator>
      <div id="container-top">
        <base-title :title="topTitle"> </base-title>
        <base-subtitle :title="topSubtitle"> </base-subtitle>
      </div>
      <slot name="mainContent"> </slot>
    </section>
  </section>
</template>

<script>
import { ref, computed, provide } from "vue";
import SideBar from "@/components/layouts/SideBar.vue";
import TopNavigator from "@/components/UI/TopNavigator.vue";
import BaseTitle from "@/components/UI/BaseTitle.vue";
import BaseSubtitle from "@/components/UI/BaseSubtitle.vue";

export default {
  components: {
    SideBar,
    TopNavigator,
    BaseTitle,
    BaseSubtitle,
  },
  props: ["page-title", "top-title", "top-subtitle", "bgImage"],
  setup() {
    const isSidebar = ref(true);

    const setGridLayout = () => {
      isSidebar.value = !isSidebar.value;
    };

    provide("isSidebar", isSidebar);
    provide("setGridLayout", setGridLayout);

    const compGridLayout = computed(() =>
      isSidebar.value ? "ten-nine" : "five-ninety-five"
    );

    return {
      isSidebar,
      setGridLayout,
      compGridLayout,
    };
  },
};
</script>

<style scoped>
#container-main {
  display: grid;
  color: #fff;
}

.ten-nine {
  grid-template-columns: 10% 90%;
}

.five-ninety-five {
  grid-template-columns: 5% 95%;
}

#side-right {
  padding: 0 1.5rem 1rem 1.5rem;
}

#side-right > header {
  text-align: center;
}

#container-top {
  margin-top: 44px;
  margin-bottom: 44px;
}

@media all and (max-width: 1366px) {
  .ten-nine {
    grid-template-columns: 12% 88%;
  }
}

@media all and (max-width: 1200px) {
  #container-main {
    grid-template-columns: 1fr;
  }
}
</style>
