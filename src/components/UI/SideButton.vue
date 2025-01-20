<template>
  <div @click="handleClick">
    <i :class="compToggleIcon"></i><span>{{ compTitle }}</span>
  </div>
</template>

<script>
import { computed, inject } from "vue";
import { useRouter } from "vue-router";

export default {
  props: {
    title: String,
    route: String,
    faIcon: String,
  },
  setup(props) {
    const router = useRouter();
    const isSidebar = inject("isSidebar");

    const compTitle = computed(() => {
      return isSidebar.value ? props.title : "";
    });
    const compToggleIcon = computed(() => {
      if (props.faIcon === "fa-solid fa-square-caret-left") {
        return isSidebar.value
          ? "fa-solid fa-square-caret-left"
          : "fa-solid fa-square-caret-right";
      } else {
        return props.faIcon;
      }
    });

    const handleClick = () => {
      if (
        props.faIcon === "fa-solid fa-square-caret-left" ||
        props.faIcon === "fa-solid fa-square-caret-right"
      ) {
        return;
      } else if (props.route === undefined) {
        router.push("/");
      } else {
        router.push(`/${props.route}`);
      }
    };

    return {
      compTitle,
      compToggleIcon,
      handleClick,
    };
  },
};
</script>

<style scoped>
div {
  padding: 5px;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1px;
}

div > i {
  width: 10%;
}
div > span {
  margin-left: 10px;
}

div:hover {
  border: 1px solid #fff;
  border-radius: 5px;
  cursor: pointer;
}
</style>
