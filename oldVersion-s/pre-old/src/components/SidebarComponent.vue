<template>
  <div id="sidebar">
    <section id="intel">
      <font-awesome-icon icon="fa-solid fa-gear" @click="handleOptions" />
      <img src="../assets/images/2glance__big copy.png" alt="" />
      <a href="">
        <font-awesome-icon :icon="['fas', 'bell']" />
      </a>
    </section>
    <section>
      <p>Nihilcoding</p>
      <router-link to="/" class="link">
        <div :class="['bar-home', { active: currentPage === 'home' }]">
          <font-awesome-icon :icon="['fas', 'home']" /> Home
        </div>
      </router-link>
      <router-link to="/projects" class="link">
        <div :class="['bar-home', { active: currentPage === 'projects' }]">
          <font-awesome-icon :icon="['far', 'file-code']" /> Projects
        </div>
      </router-link>
      <router-link to="/about" class="link">
        <div :class="['bar-home', { active: currentPage === 'about' }]">
          <font-awesome-icon :icon="['fas', 'user']" /> About me
        </div>
      </router-link>
    </section>
    <section>
      <p>My Works</p>
      <router-link to="/tools" class="link">
        <div :class="['bar-home', { active: currentPage === 'tools' }]">
          <font-awesome-icon :icon="['fas', 'gear']" /> Tools
        </div>
      </router-link>
      <router-link to="/api-projects" class="link">
        <div :class="['bar-home', { active: currentPage === 'api-projects' }]">
          <font-awesome-icon :icon="['fas', 'code-merge']" /> Api Projects
        </div>
      </router-link>
      <router-link to="/websites" class="link">
        <div :class="['bar-home', { active: currentPage === 'websites' }]">
          <font-awesome-icon :icon="['fas', 'globe']" /> Websites
        </div>
      </router-link>
    </section>
    <section id="links">
      <a href="https://github.com/Nihilnia" target="_blank"
        ><font-awesome-icon :icon="['fab', 'github']"
      /></a>
      <a href="https://linkedin.com/in/okantopal" target="_blank"
        ><font-awesome-icon :icon="['fab', 'linkedin']"
      /></a>
    </section>
  </div>
</template>

<script>
export default {
  name: "SidebarComponent",
  components: {},
  props: {
    currentPage: String,
  },
  methods: {
    handleOptions() {
      console.log("anasd");
      document
        .getElementById("container-options")
        .classList.toggle("hide-show");
    },
  },
};
</script>

<style scoped>
#sidebar {
  display: flex;
  flex-direction: column;
  padding: 20px 25px;
  background-color: rgba(0, 0, 0, 0.7);
  position: relative;
  row-gap: 100px;
}

#sidebar section > p:nth-child(1) {
  opacity: 0.5;
  margin-bottom: 10px;
}
#sidebar section > div {
  font-size: 15px;
  margin-bottom: 7px;
}

#sidebar a {
  text-decoration: none;
  color: #fff;
}

#intel {
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  width: 100%;
}

#intel img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

#sidebar p,
#sidebar div {
  margin-bottom: 10px;
  padding: 5px 5px;
}

#sidebar div {
  max-width: 200px;
}

#sidebar svg {
  width: 13px;
  height: 15px;
  margin-right: 4px;
}

#links {
  position: absolute;
  bottom: 0;
  margin-left: 30px;
}

#links a {
  margin-right: 10px;
}

#links svg {
  width: 22px;
  height: 22px;
}
.bar-home {
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 5px;
}

.bar-home.active {
  border: 1px solid rgba(255, 255, 255, 0.7);
}

.bar-home:hover {
  border: 1px solid rgba(255, 255, 255, 0.3);
}
</style>
