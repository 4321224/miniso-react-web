const baseUrl = "p3-challenge-1-production-2041.up.railway.app";

function createAdmin(data) {
  return async (dispatch) => {
    try {
      console.log(data, "ini data create admin");
      let response = await fetch(`${baseUrl}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw { msg: "error" };
      response = await response.json();
    } catch (error) {
      console.log(error);
    }
  };
}

function loginAdmin(data) {
  return async (dispatch) => {
    try {
      console.log(data, "masuk login nih");
      let response = await fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw { msg: "error" };
      response = await response.json();
    } catch (error) {
      console.log(error);
    }
  };
}

export default { createAdmin, loginAdmin };
