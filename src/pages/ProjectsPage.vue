<template>
  <MainLayout
    currentPage="projects"
    :bgImage="require('@/assets/images/projectsPage.png')"
    posX="100px"
  >
    <template v-slot:mainContent>
      <section id="container-projects">
        <ParallaxCardComponent
          title="Spotify Api Project"
          subTitle="Full-Stack • Websites"
          :bgImg="spotifyProjectImage"
          projectLink="https://spotifyapiproject.netlify.app"
        />
        <ParallaxCardComponent
          title="Password Generator"
          subTitle="Front-End • Tools"
          :bgImg="passwordGeneratorProjectImage"
          projectLink="https://nihilnia.github.io/PasswordGenerator"
        />
        <ParallaxCardComponent
          title="Event Key Codes"
          subTitle="Front-End • Tools"
          :bgImg="eventKeyCodesProjectImage"
          projectLink="https://nihilnia.github.io/PasswordGenerator"
        />
      </section>
    </template>
  </MainLayout>
</template>

<script>
import MainLayout from "@/layouts/MainLayout.vue";
import ParallaxCardComponent from "@/components/ParallaxCardComponent.vue";
import spotifyProjectImage from "@/assets/images/spotifyApiProject.png";
import passwordGeneratorProjectImage from "@/assets/images/passwordGeneratorProject.png";
import eventKeyCodesProjectImage from "@/assets/images/eventKeyCodesProject.jpg";
export default {
  name: "ProjectsPage",
  components: { MainLayout, ParallaxCardComponent },
  data() {
    return {
      spotifyProjectImage,
      passwordGeneratorProjectImage,
      eventKeyCodesProjectImage,
    };
  },
};
</script>

<style scoped>
#container-projects {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 50px;
}
</style>
