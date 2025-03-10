<template>
  <v-container>
    <CardSection
      title-icon="mdi-none"
      v-if="siteSettings.showRecent"
      :title="$t('general.recent')"
      :recipes="recentRecipes"
      :hard-limit="siteSettings.cardsPerSection"
    />
    <CardSection
      :sortable="true"
      v-for="(section, index) in recipeByCategory"
      :key="section.name + section.position"
      :title="section.name"
      :recipes="section.recipes"
      :hard-limit="siteSettings.cardsPerSection"
      @sort="sortAZ(index)"
      @sort-recent="sortRecent(index)"
    />
  </v-container>
</template>

<script>
import { api } from "@/api";
import CardSection from "../components/UI/CardSection";

export default {
  components: {
    CardSection,
  },
  data() {
    return {
      recipeByCategory: [],
    };
  },
  async created() {
    await this.$store.dispatch("requestRecentRecipes");
    await this.buildPage();
    this.recipeByCategory.sort((a, b) => a.position - b.position);
    try {
      await navigator.wakeLock.request("screen");
      console.log("acquired wakelock")
    } catch (err) {
      // The Wake Lock request has failed - usually system related, such as battery.
      console.log("failed to acquire wakelock");
      console.error(err);
    }
  },
  computed: {
    siteSettings() {
      return this.$store.getters.getSiteSettings;
    },
    recentRecipes() {
      return this.$store.getters.getRecentRecipes;
    },
  },

  methods: {
    async buildPage() {
      await this.$store.dispatch("requestSiteSettings");
      this.siteSettings.categories.forEach(async element => {
        let recipes = await this.getRecipeByCategory(element.slug);
        if (recipes.recipes.length < 0) recipes.recipes = [];
        this.recipeByCategory.push(recipes);
      });
    },
    async getRecipeByCategory(category) {
      return await api.categories.getRecipesInCategory(category);
    },
    getRecentRecipes() {
      this.$store.dispatch("requestRecentRecipes");
    },
    sortAZ(index) {
      this.recipeByCategory[index].recipes.sort((a, b) => (a.name > b.name ? 1 : -1));
    },
    sortRecent(index) {
      this.recipeByCategory[index].recipes.sort((a, b) => (a.dateAdded > b.dateAdded ? -1 : 1));
    },
  },
};
</script>

<style></style>
