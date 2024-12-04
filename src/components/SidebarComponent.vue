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
      <div>
        <p>Nihilcoding</p>
        <div>
          <router-link to="/" class="link">
            <font-awesome-icon :icon="['fas', 'home']" /> Home
          </router-link>
        </div>
        <div>
          <router-link to="/projects" class="link">
            <font-awesome-icon :icon="['far', 'file-code']" /> Projects
          </router-link>
        </div>
        <div>
          <router-link to="/about" class="link">
            <font-awesome-icon :icon="['fas', 'user']" /> About me
          </router-link>
        </div>
      </div>
    </section>
    <section>
      <p>My Works</p>
      <div>
        <router-link to="/tools" class="link">
          <font-awesome-icon :icon="['fas', 'gear']" /> Tools
        </router-link>
      </div>
      <div>
        <router-link to="/api-projects" class="link">
          <font-awesome-icon :icon="['fas', 'code-merge']" /> Api Projects
        </router-link>
      </div>
      <div>
        <router-link to="/websites" class="link">
          <font-awesome-icon :icon="['fas', 'globe']" /> Websites
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "SidebarComponent",
};
</script>

<style scoped>
#sidebar {
  display: grid;
  padding: 20px 25px;
  background-color: rgba(0, 0, 0, 0.7);
}

#sidebar section > div > p {
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
}

#sidebar svg {
  width: 13px;
  height: 15px;
  margin-right: 4px;
}
</style>
