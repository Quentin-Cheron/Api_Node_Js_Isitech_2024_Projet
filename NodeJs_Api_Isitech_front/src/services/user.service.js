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
    return response.json();
  } catch (error) {
    console.error("Error:", error);
  }
};

export default {
  signup,
};
