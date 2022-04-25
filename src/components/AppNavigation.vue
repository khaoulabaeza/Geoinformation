<template>
  <span>
    <v-navigation-drawer
      app
      v-model="drawer"
      class="brown lighten-2"
      dark
      disable-resize-watcher
    >
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-item :key="index" :to="item.url">
            <v-list-item-content>
              {{ item.title }}
            </v-list-item-content>
          </v-list-item>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="brown darken-4" dark>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <router-link to="/">
        <v-toolbar data-cy="titleBtn">{{ appTitle }}</v-toolbar>
      </router-link>
      <v-btn
        text
        class="hidden-sm-and-down nav-menu"
        to="/accueil"
        data-cy="accueilBtn"
        >Accueil</v-btn
      >
      <v-btn
        text
        class="hidden-sm-and-down nav-menu"
        to="/offres"
        data-cy="offresBtn"
        >Offres</v-btn
      >
      <v-btn
        text
        class="hidden-sm-and-down nav-menu"
        to="/annonces"
        data-cy="annoncesBtn"
        >Annonces</v-btn
      >
      <v-btn
        text
        class="hidden-sm-and-down nav-menu"
        to="/formation"
        data-cy="formationBtn"
        >Formation</v-btn
      >
      <v-btn
        text
        class="hidden-sm-and-down nav-menu"
        to="/produits"
        data-cy="produitsBtn"
        >Produits</v-btn
      >
      <v-btn
        text
        class="hidden-sm-and-down nav-menu"
        to="/contact"
        data-cy="contactBtn"
        >Contact</v-btn
      >
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <div v-if="!isAuthenticated" class="hidden-sm-and-down">
        <v-btn text to="/sign-in" data-cy="signinBtn">SIGN IN</v-btn>
        <v-btn
          color="brown lighten-3"
          to="/join"
          class="nav-join"
          data-cy="joinBtn"
          >JOIN</v-btn
        >
      </div>
      <div v-else>
        <v-btn text to="/about">PROFILE</v-btn>
        <v-btn outlined color="white" @click="logout" data-cy="logout"
          >Logout</v-btn
        >
      </div>
    </v-app-bar>
  </span>
</template>

<script>
export default {
  name: "AppNavigation",
  data() {
    return {
      appTitle: "GéoInformation",
      drawer: false,
      items: [
        { title: "Accueil", url: "/accueil" },
        { title: "Offres", url: "/offres" },
        { title: "Annonces", url: "/annonces" },
        { title: "Formation", url: "/formation" },
        { title: "Produits", url: "/produits" },
        { title: "Contact", url: "/contact" },
        { title: "Profile", url: "/about" },
        { title: "Sign In", url: "/sign-in" },
        { title: "Join", url: "/join" },
      ],
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("userSignOut");
    },
  },
};
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}
</style>
