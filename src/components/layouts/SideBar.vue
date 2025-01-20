<template>
  <section id="desktop">
    <header>
      <div>
        <img
          src="../../assets/pics/nihilZone.jpg"
          alt=""
          :style="{ maxWidth: imgMaxWidth }"
        />
      </div>
      <div>
        <side-button
          fa-icon="fa-solid fa-square-caret-left"
          @click="handleGridLayout"
        ></side-button>
      </div>
    </header>
    <div id="pages">
      <div>
        <side-button
          :class="{ active: activeButton === 'Home' }"
          @click="setActiveButton('Home')"
          title="Home"
          fa-icon="fas fa-home"
        ></side-button>
      </div>
      <div>
        <side-button
          :class="{ active: activeButton === 'Front-End' }"
          @click="setActiveButton('Front-End')"
          title="Projects"
          route="projects"
          fa-icon="fas fa-folder"
        ></side-button>
      </div>
      <div>
        <side-button
          :class="{ active: activeButton === 'This project' }"
          @click="setActiveButton('This project')"
          title="This project"
          route="this-project"
          fa-icon="fas fa-project-diagram"
        ></side-button>
      </div>
      <div>
        <side-button
          :class="{ active: activeButton === 'Lab' }"
          @click="setActiveButton('Lab')"
          title="Lab"
          route="lab"
          fa-icon="fas fa-flask"
        ></side-button>
      </div>
      <div>
        <side-button
          :class="{ active: activeButton === 'Useful Links' }"
          @click="setActiveButton('Useful Links')"
          title="Useful Links"
          route="useful-links"
          fa-icon="fas fa-link"
        ></side-button>
      </div>
      <div>
        <side-button
          :class="{ active: activeButton === 'About Me' }"
          @click="setActiveButton('About Me')"
          title="About Me"
          route="about-me"
          fa-icon="fas fa-user"
        ></side-button>
      </div>
    </div>
    <div class="particle-container">
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
    </div>
    <div id="sidebar-socials">
      <a href="https://github.com/Nihilnia" target="_blank"
        ><i class="fa-brands fa-github"></i
      ></a>
      <a href="https://linkedin.com/in/okantopal" target="_blank"
        ><i class="fa-brands fa-linkedin"></i
      ></a>
    </div>
  </section>
  <section id="tablet-mobile">
    <div id="btn-hamburger" @click="handleHamburger" :class="hamburgerStyles">
      <img src="../../assets/pics/grid.svg" alt="" />
    </div>
    <div id="pages" :class="hamburgerMenuStyles">
      <div>
        <side-button
          :class="{ active: activeButton === 'Home' }"
          @click="setActiveButton('Home')"
          title="Home"
          fa-icon="fas fa-home"
        ></side-button>
      </div>
      <div>
        <side-header title="Projects"></side-header>
        <div class="abc">
          <side-button
            :class="{ active: activeButton === 'Front-End' }"
            @click="setActiveButton('Front-End')"
            title="Front-End"
            route="projects"
            fa-icon="fas fa-folder"
          ></side-button>
          <side-button
            :class="{ active: activeButton === 'Full-Stack' }"
            @click="setActiveButton('Full-Stack')"
            title="Full-Stack"
            route="projects"
            fa-icon="fas fa-folder"
          ></side-button>
          <side-button
            :class="{ active: activeButton === 'This project' }"
            @click="setActiveButton('This project')"
            title="This project"
            route="this-project"
            fa-icon="fas fa-project-diagram"
          ></side-button>
        </div>
      </div>
      <div>
        <side-header title="Lab"></side-header>
        <div class="abc">
          <side-button
            :class="{ active: activeButton === 'Lab' }"
            @click="setActiveButton('Lab')"
            title="Lab"
            route="lab"
            fa-icon="fas fa-flask"
          ></side-button>
          <side-button
            :class="{ active: activeButton === 'Useful Links' }"
            @click="setActiveButton('Useful Links')"
            title="Useful Links"
            route="useful-links"
            fa-icon="fas fa-link"
          ></side-button>
        </div>
      </div>
      <div>
        <side-header title="Nihil"></side-header>
        <div class="abc">
          <side-button
            :class="{ active: activeButton === 'About Me' }"
            @click="setActiveButton('About Me')"
            title="About Me"
            route="about-me"
            fa-icon="fas fa-user"
          ></side-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SideButton from "../UI/SideButton.vue";
import SideHeader from "../UI/SideHeader.vue";

export default {
  components: {
    SideButton,
    SideHeader,
  },
  inject: ["setGridLayout"],
  data() {
    return {
      activeButton: "Home",
      imgMaxWidth: "30%",
      isHamburger: false,
    };
  },
  methods: {
    setActiveButton(buttonTitle) {
      this.activeButton = buttonTitle;
      this.isHamburger = false;
    },
    handleGridLayout() {
      this.imgMaxWidth = this.imgMaxWidth === "30%" ? "60%" : "30%";
      this.setGridLayout();
    },
    handleHamburger() {
      this.isHamburger = !this.isHamburger;
    },
  },
  computed: {
    hamburgerStyles() {
      return this.isHamburger ? "bg-black" : "bg-transparent";
    },
    hamburgerMenuStyles() {
      return this.isHamburger ? "show" : "hide";
    },
  },
};
</script>

<style scoped>
#desktop {
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10px;
  position: relative;
}

#desktop > header {
  display: flex;
  justify-content: space-between;
}

#desktop img {
  max-width: 30%;
  border-radius: 50%;
}

#pages {
  margin-top: 50px;
}

#sidebar-socials {
  position: absolute;
  bottom: 7%;
  display: flex;
  justify-content: space-around;
  max-width: 35%;
  width: 100%;
}

#sidebar-socials a {
  color: #fff;
  font-size: 20px;
}

#desktop #pages > div {
  margin-top: 10px;
}

#desktop .abc {
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  margin-top: 7px;
}

#desktop .active {
  border: 1px solid #fff;
  border-radius: 5px;
  animation: borderPulse 1.44s infinite;
}

@keyframes borderPulse {
  0%,
  100% {
    border-color: transparent;
  }
  50% {
    border-color: #fff;
  }
}

#tablet-mobile {
  display: none;
}

.particle-container {
  position: absolute;
  width: 200px;
  height: 200px;
  bottom: 0;
}

.particle {
  position: absolute;
  width: 8px;
  height: 8px;
  background: red;
  border-radius: 50%;
  box-shadow: 0 0 20px 5px red, 0 0 40px 10px rgba(255, 0, 0, 0.5);
  animation: float 3s infinite ease-in-out;
}

/* Generate multiple particles */
.particle:nth-child(1) {
  top: 20px;
  left: 50px;
  animation-duration: 2.5s;
  animation-delay: -1s;
}
.particle:nth-child(2) {
  top: 80px;
  left: 120px;
  animation-duration: 3s;
  animation-delay: -1.5s;
}
.particle:nth-child(3) {
  top: 150px;
  left: 30px;
  animation-duration: 2s;
  animation-delay: -0.5s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  50% {
    transform: translateY(-20px) scale(1.2);
    opacity: 0.8;
  }
}

@media all and (max-width: 1200px) {
  #desktop {
    display: none;
  }

  #btn-hamburger > img {
    max-width: 4%;
    width: 100%;
    filter: invert(100%) brightness(200%);
  }

  #tablet-mobile {
    display: block;
    max-width: 100%;
    width: 100%;
    z-index: 9999;
  }

  .bg-black {
    background-color: #000;
  }

  .bg-transparent {
    background-color: transparent;
  }

  .show {
    display: block;
    position: fixed;
    max-width: 100%;
    width: 100%;
    background-color: #000;
    padding: 20px;
  }

  .hide {
    display: none;
  }
}
</style>
