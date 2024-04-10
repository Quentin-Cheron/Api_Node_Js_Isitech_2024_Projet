const API_URL_SIGNUP = "http://localhost:3000/auth/signup";
const API_URL_SIGNIN = "http://localhost:3000/auth/signin";

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

const getCurrentUser = () => {
  return localStorage.getItem("user");
};

export default {
  signup,
  signin,
  getCurrentUser,
};
