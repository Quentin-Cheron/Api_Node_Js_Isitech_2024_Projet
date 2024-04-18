const API_URL_SIGNUP = "http://localhost:3000/auth/signup";
const API_URL_SIGNIN = "http://localhost:3000/auth/signin";

// Fetch function to sign up a user

const signup = async (user) => {
  try {
    const response = await fetch(API_URL_SIGNUP, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return response.json();
  } catch (error) {
    console.error("Error:", error);
  }
};

// Fetch function to sign in a user

const signin = async (user) => {
  try {
    const response = await fetch(API_URL_SIGNIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const result = await response.json();

    localStorage.setItem("user", result.result);
    return result;
  } catch (error) {
    console.error("Error:", error);
  }
};

// Function to get the current user

const getCurrentUser = () => {
  return localStorage.getItem("user");
};

export default {
  signup,
  signin,
  getCurrentUser,
};
