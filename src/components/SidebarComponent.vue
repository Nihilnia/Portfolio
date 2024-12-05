<template>
  <div id="sidebar">
    <section id="intel">
      <a href="">
        <font-awesome-icon icon="fa-solid fa-gear" />
      </a>
      <img src="../assets/images/2glance__big copy.png" alt="" />
      <a href="">
        <font-awesome-icon :icon="['fas', 'bell']" />
      </a>
    </section>
    <section>
      <p>Nihilcoding</p>
      <div :class="['bar-home', { active: currentPage === 'home' }]">
        <router-link to="/" class="link">
          <font-awesome-icon :icon="['fas', 'home']" /> Home
        </router-link>
      </div>
      <div :class="['bar-home', { active: currentPage === 'projects' }]">
        <router-link to="/projects" class="link">
          <font-awesome-icon :icon="['far', 'file-code']" /> Projects
        </router-link>
      </div>
      <div :class="['bar-home', { active: currentPage === 'about' }]">
        <router-link to="/about" class="link">
          <font-awesome-icon :icon="['fas', 'user']" /> About me
        </router-link>
      </div>
    </section>
    <section>
      <p>My Works</p>
      <div :class="['bar-home', { active: currentPage === 'tools' }]">
        <router-link to="/tools" class="link">
          <font-awesome-icon :icon="['fas', 'gear']" /> Tools
        </router-link>
      </div>
      <div :class="['bar-home', { active: currentPage === 'api-projects' }]">
        <router-link to="/api-projects" class="link">
          <font-awesome-icon :icon="['fas', 'code-merge']" /> Api Projects
        </router-link>
      </div>
      <div :class="['bar-home', { active: currentPage === 'websites' }]">
        <router-link to="/websites" class="link">
          <font-awesome-icon :icon="['fas', 'globe']" /> Websites
        </router-link>
      </div>
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
  props: {
    currentPage: String,
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
