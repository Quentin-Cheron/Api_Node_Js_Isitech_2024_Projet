const API_URL_GET_ALL_CATEGORIES = "http://localhost:3000/categories";

// Fetch function to get all categories

const getAllCategories = async () => {
  try {
    const response = await fetch(API_URL_GET_ALL_CATEGORIES, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("user"),
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching categories", error);
  }
};

export default {
  getAllCategories,
};
