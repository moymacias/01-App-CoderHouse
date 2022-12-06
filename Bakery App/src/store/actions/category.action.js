export const SELECTED_CATEGORY = "SELECTED_CATEGORY";

export const selectedCategory = (id) => ({
  type: SELECTED_CATEGORY,
  categoryID: id,
});
