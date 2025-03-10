import { API_ROUTES } from "./apiRoutes";
import { apiReq } from "./api-utils";
import { store } from "../store";
import i18n from "@/i18n.js";

export const recipeAPI = {
  /**
   * Returns the Default Recipe Settings for the Site
   * @returns {AxoisResponse} Axois Response Object
   */
  async getDefaultSettings() {
    const response = await apiReq.get(API_ROUTES.aboutRecipesDefaults);
    return response;
  },

  /**
   * Create a Recipe by URL
   * @param {string} recipeURL
   * @returns {string} Recipe Slug
   */
  async createByURL(recipeURL) {
    const response = await apiReq.post(API_ROUTES.recipesCreateUrl, { url: recipeURL }, false, () =>
      i18n.t("recipe.recipe-created")
    );

    store.dispatch("requestRecentRecipes");
    return response;
  },

  async getAllByCategory(categories) {
    let response = await apiReq.post(API_ROUTES.recipesCategory, categories);
    return response.data;
  },

  async create(recipeData) {
    const response = await apiReq.post(
      API_ROUTES.recipesCreate,
      recipeData,
      () => i18n.t("recipe.recipe-creation-failed"),
      () => i18n.t("recipe.recipe-created")
    );
    store.dispatch("requestRecentRecipes");
    return response.data;
  },

  async requestDetails(recipeSlug) {
    const response = await apiReq.getSafe(API_ROUTES.recipesRecipeSlug(recipeSlug));
    return response;
  },

  updateImage(recipeSlug, fileObject, overrideSuccessMsg = false) {
    const formData = new FormData();
    formData.append("image", fileObject);
    formData.append("extension", fileObject.name.split(".").pop());

    let successMessage = null;
    if (!overrideSuccessMsg) {
      successMessage = function() {
        return overrideSuccessMsg ? null : i18n.t("recipe.recipe-image-updated");
      };
    }

    return apiReq.put(
      API_ROUTES.recipesRecipeSlugImage(recipeSlug),
      formData,
      () => i18n.t("general.image-upload-failed"),
      successMessage
    );
  },

  async createAsset(recipeSlug, fileObject, name, icon) {
    const fd = new FormData();
    fd.append("file", fileObject);
    fd.append("extension", fileObject.name.split(".").pop());
    fd.append("name", name);
    fd.append("icon", icon);
    const response = apiReq.post(API_ROUTES.recipesRecipeSlugAssets(recipeSlug), fd);
    return response;
  },

  updateImagebyURL(slug, url) {
    return apiReq.post(
      API_ROUTES.recipesRecipeSlugImage(slug),
      { url: url },
      () => i18n.t("general.image-upload-failed"),
      () => i18n.t("recipe.recipe-image-updated")
    );
  },

  async update(data) {
    let response = await apiReq.put(
      API_ROUTES.recipesRecipeSlug(data.slug),
      data,
      () => i18n.t("recipe.recipe-update-failed"),
      () => i18n.t("recipe.recipe-updated")
    );
    if (response) {
      store.dispatch("patchRecipe", response.data);
      return response.data.slug; // ! Temporary until I rewrite to refresh page without additional request
    }
  },

  async patch(data) {
    let response = await apiReq.patch(API_ROUTES.recipesRecipeSlug(data.slug), data);
    store.dispatch("patchRecipe", response.data);
    return response.data;
  },

  async delete(recipeSlug) {
    const response = await apiReq.delete(
      API_ROUTES.recipesRecipeSlug(recipeSlug),
      null,
      () => i18n.t("recipe.unable-to-delete-recipe"),
      () => i18n.t("recipe.recipe-deleted")
    );
    store.dispatch("dropRecipe", response.data);
    return response;
  },

  async allSummary(start = 0, limit = 9999) {
    const response = await apiReq.get(API_ROUTES.recipesSummary, {
      params: { start: start, limit: limit },
    });
    return response.data;
  },

  async allUntagged() {
    const response = await apiReq.get(API_ROUTES.recipesSummaryUntagged);
    return response.data;
  },

  async allUnategorized() {
    const response = await apiReq.get(API_ROUTES.recipesSummaryUncategorized);
    return response.data;
  },

  recipeImage(recipeSlug, version = null, key = null) {
    return `./api/media/recipes/${recipeSlug}/images/original.webp?&rnd=${key}&version=${version}`;
  },

  recipeSmallImage(recipeSlug, version = null, key = null) {
    return `./api/media/recipes/${recipeSlug}/images/min-original.webp?&rnd=${key}&version=${version}`;
  },

  recipeTinyImage(recipeSlug, version = null, key = null) {
    return `./api/media/recipes/${recipeSlug}/images/tiny-original.webp?&rnd=${key}&version=${version}`;
  },

  recipeAssetPath(recipeSlug, assetName) {
    return `./api/media/recipes/${recipeSlug}/assets/${assetName}`;
  },

  /** Create comment in the Database
   * @param slug
   */
  async createComment(slug, data) {
    const response = await apiReq.post(API_ROUTES.recipesSlugComments(slug), data);
    return response.data;
  },
  /** Update comment in the Database
   * @param slug
   * @param id
   */
  async updateComment(slug, id, data) {
    const response = await apiReq.put(API_ROUTES.recipesSlugCommentsId(slug, id), data);
    return response.data;
  },
  /** Delete comment from the Database
   * @param slug
   * @param id
   */
  async deleteComment(slug, id) {
    const response = await apiReq.delete(API_ROUTES.recipesSlugCommentsId(slug, id));
    return response.data;
  },

  async testScrapeURL(url) {
    const response = await apiReq.post(API_ROUTES.recipesTestScrapeUrl, { url: url });
    return response.data;
  },
};
