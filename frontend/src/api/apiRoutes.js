// This Content is Auto Generated
export const prefix = "./api";
export const API_ROUTES = {
  aboutEvents: `${prefix}/about/events`,
  aboutEventsNotifications: `${prefix}/about/events/notifications`,
  aboutEventsNotificationsTest: `${prefix}/about/events/notifications/test`,
  aboutRecipesDefaults: `${prefix}/about/recipes/defaults`,
  authRefresh: `${prefix}/auth/refresh`,
  authToken: `${prefix}/auth/token`,
  authTokenLong: `${prefix}/auth/token/long`,
  backupsAvailable: `${prefix}/backups/available`,
  backupsExportDatabase: `${prefix}/backups/export/database`,
  backupsUpload: `${prefix}/backups/upload`,
  categories: `${prefix}/categories`,
  categoriesEmpty: `${prefix}/categories/empty`,
  debug: `${prefix}/debug`,
  debugLastRecipeJson: `${prefix}/debug/last-recipe-json`,
  debugLog: `${prefix}/debug/log`,
  debugStatistics: `${prefix}/debug/statistics`,
  debugVersion: `${prefix}/debug/version`,
  groups: `${prefix}/groups`,
  groupsSelf: `${prefix}/groups/self`,
  mealPlansAll: `${prefix}/meal-plans/all`,
  mealPlansCreate: `${prefix}/meal-plans/create`,
  mealPlansThisWeek: `${prefix}/meal-plans/this-week`,
  mealPlansToday: `${prefix}/meal-plans/today`,
  mealPlansTodayImage: `${prefix}/meal-plans/today/image`,
  migrations: `${prefix}/migrations`,
  recipesCategory: `${prefix}/recipes/category`,
  recipesCreate: `${prefix}/recipes/create`,
  recipesCreateFromZip: `${prefix}/recipes/create-from-zip`,
  recipesCreateUrl: `${prefix}/recipes/create-url`,
  recipesSummary: `${prefix}/recipes/summary`,
  recipesSummaryUncategorized: `${prefix}/recipes/summary/uncategorized`,
  recipesSummaryUntagged: `${prefix}/recipes/summary/untagged`,
  recipesTag: `${prefix}/recipes/tag`,
  recipesTestScrapeUrl: `${prefix}/recipes/test-scrape-url`,
  shoppingLists: `${prefix}/shopping-lists`,
  siteSettings: `${prefix}/site-settings`,
  siteSettingsCustomPages: `${prefix}/site-settings/custom-pages`,
  siteSettingsWebhooksTest: `${prefix}/site-settings/webhooks/test`,
  tags: `${prefix}/tags`,
  tagsEmpty: `${prefix}/tags/empty`,
  themes: `${prefix}/themes`,
  themesCreate: `${prefix}/themes/create`,
  users: `${prefix}/users`,
  usersApiTokens: `${prefix}/users/api-tokens`,
  usersSelf: `${prefix}/users/self`,
  usersSignUps: `${prefix}/users/sign-ups`,
  utilsDownload: `${prefix}/utils/download`,

  aboutEventsId: id => `${prefix}/about/events/${id}`,
  aboutEventsNotificationsId: id => `${prefix}/about/events/notifications/${id}`,
  backupsFileNameDelete: file_name => `${prefix}/backups/${file_name}/delete`,
  backupsFileNameDownload: file_name => `${prefix}/backups/${file_name}/download`,
  backupsFileNameImport: file_name => `${prefix}/backups/${file_name}/import`,
  categoriesCategory: category => `${prefix}/categories/${category}`,
  debugLogNum: num => `${prefix}/debug/log/${num}`,
  groupsId: id => `${prefix}/groups/${id}`,
  mealPlansId: id => `${prefix}/meal-plans/${id}`,
  mealPlansIdShoppingList: id => `${prefix}/meal-plans/${id}/shopping-list`,
  mealPlansPlanId: plan_id => `${prefix}/meal-plans/${plan_id}`,
  mediaRecipesRecipeSlugAssetsFileName: (recipe_slug, file_name) =>
    `${prefix}/media/recipes/${recipe_slug}/assets/${file_name}`,
  mediaRecipesRecipeSlugImagesFileName: (recipe_slug, file_name) =>
    `${prefix}/media/recipes/${recipe_slug}/images/${file_name}`,
  migrationsImportTypeFileNameDelete: (import_type, file_name) =>
    `${prefix}/migrations/${import_type}/${file_name}/delete`,
  migrationsImportTypeFileNameImport: (import_type, file_name) =>
    `${prefix}/migrations/${import_type}/${file_name}/import`,
  migrationsImportTypeUpload: import_type => `${prefix}/migrations/${import_type}/upload`,
  recipesRecipeSlug: recipe_slug => `${prefix}/recipes/${recipe_slug}`,
  recipesRecipeSlugAssets: recipe_slug => `${prefix}/recipes/${recipe_slug}/assets`,
  recipesRecipeSlugImage: recipe_slug => `${prefix}/recipes/${recipe_slug}/image`,
  recipesRecipeSlugZip: recipe_slug => `${prefix}/recipes/${recipe_slug}/zip`,
  recipesSlugComments: slug => `${prefix}/recipes/${slug}/comments`,
  recipesSlugCommentsId: (slug, id) => `${prefix}/recipes/${slug}/comments/${id}`,
  shoppingListsId: id => `${prefix}/shopping-lists/${id}`,
  siteSettingsCustomPagesId: id => `${prefix}/site-settings/custom-pages/${id}`,
  tagsTag: tag => `${prefix}/tags/${tag}`,
  themesId: id => `${prefix}/themes/${id}`,
  usersApiTokensTokenId: token_id => `${prefix}/users/api-tokens/${token_id}`,
  usersId: id => `${prefix}/users/${id}`,
  usersIdFavorites: id => `${prefix}/users/${id}/favorites`,
  usersIdFavoritesSlug: (id, slug) => `${prefix}/users/${id}/favorites/${slug}`,
  usersIdImage: id => `${prefix}/users/${id}/image`,
  usersIdPassword: id => `${prefix}/users/${id}/password`,
  usersIdResetPassword: id => `${prefix}/users/${id}/reset-password`,
  usersSignUpsToken: token => `${prefix}/users/sign-ups/${token}`,
};
