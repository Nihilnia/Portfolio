<template>
  <section id="container-main">
    <parallax-card
      title="Spotify Api Project"
      description="A full-stack api project that allows you to create your own account, search & follow for songs, listen, artists and playlists."
      bgImage="spotify.svg"
      web-link="https://nihilnia.github.io/Spotify-Api-Vue"
      git-hub-link="https://github.com/Nihilnia/Spotify-Api-Vue"
      bg-img="spotify.svg"
    ></parallax-card>
    <parallax-card
      title="Password Generator"
      description="With my easy-to-use tool, you can create passwords with a custom length and choose from a variety of character types."
      bgImage="password.svg"
      web-link="https://nihilnia.github.io/PasswordGenerator"
      git-hub-link="https://github.com/Nihilnia/PasswordGenerator"
    ></parallax-card>
    <parallax-card
      title="Weather Api Project"
      description="Fetches real-time weather data, allowing users to search for cities and track current conditions with a sleek, user-friendly interface."
      bgImage="weather.svg"
      web-link="https://nihilnia.github.io/PasswordGenerator"
      git-hub-link="https://github.com/Nihilnia/PasswordGenerator"
    ></parallax-card>
    <parallax-card
      title="Mouse Tester"
      description="Web tool that tracks mouse clicks and button responsiveness, providing real-time feedback to test and diagnose mouse functionality."
      bgImage="mouse.svg"
      web-link="https://nihilnia.github.io/MouseTester"
      git-hub-link="https://github.com/Nihilnia/MouseTester"
    ></parallax-card>
    <parallax-card
      title="Todo App"
      description="A task management app that allows users to create, organize, and prioritize tasks with progress tracking."
      bgImage="todo.svg"
      web-link="https://tod0appv2.netlify.app"
      git-hub-link="https://github.com/Nihilnia/TodoApp_v2"
    ></parallax-card>
    <parallax-card
      title="Key Codes"
      description="An interactive tool that displays the information about pressed key, helping developers."
      bgImage="key.svg"
      web-link="https://nihilnia.github.io/js-key-codes-vue/"
      git-hub-link="https://github.com/Nihilnia/js-key-codes-vue"
    ></parallax-card>
  </section>
</template>

<script>
import ParallaxCard from "@/components/UI/ParallaxCard.vue";

export default {
  inject: ["setCurrentPage"],
  components: { ParallaxCard },
  mounted() {
    this.setCurrentPage(
      "Projects",
      "Projects",
      "Here is the some of my recent projects"
    );
  },
};
</script>

<style scoped>
#container-main {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

@media all and (max-width: 1366px) {
  #container-main {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media all and (max-width: 1200px) {
  #container-main {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media all and (max-width: 768px) {
  #container-main {
    grid-template-columns: 1fr;
  }
}
</style>
