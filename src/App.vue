<template>
  <div id="container-main">
    <div id="sidebar">
      <section id="intel">
        <a href="">
          <font-awesome-icon icon="fa-solid fa-gear" />
        </a>
        <img src="./assets/images/2glance__big copy.png" alt="" />
        <a href="">
          <font-awesome-icon :icon="['fas', 'bell']" />
        </a>
      </section>
      <section>
        <p>Nihilcoding</p>
        <div><font-awesome-icon :icon="['fas', 'home']" /> Home</div>
        <div><font-awesome-icon :icon="['far', 'file-code']" /> Projects</div>
        <div><font-awesome-icon :icon="['fas', 'user']" /> About me</div>
      </section>
      <section>
        <p>My Works</p>
        <div><font-awesome-icon :icon="['fas', 'gear']" /> Tools</div>
        <div>
          <font-awesome-icon :icon="['fas', 'code-merge']" /> Api Projects
        </div>
        <div><font-awesome-icon :icon="['fas', 'globe']" /> Websites</div>
      </section>
    </div>
    <div id="content">
      <WelcomeHeader text="Hi, I am a web developer." />
    </div>
  </div>
</template>

<script>
import WelcomeHeader from "./components/WelcomeHeader.vue";

export default {
  name: "App",
  components: { WelcomeHeader },
};
</script>

<style>
#container-main {
  display: grid;
  max-width: 100%;
  width: 100%;
  grid-template-columns: 12.5% 87.5%;
  background-image: url(./assets/images/GG.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-size: 110%;
}

#sidebar {
  display: grid;
  padding: 20px 25px;
  background-color: rgba(0, 0, 0, 0.7);
}

#content {
  background-color: rgba(0, 0, 0, 0.5);
}

#sidebar section > p {
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

#sidebar h1,
#sidebar div {
  margin: 0;
  padding: 0;
}

#sidebar svg {
  width: 13px;
  height: 15px;
  margin-right: 4px;
}
</style>
