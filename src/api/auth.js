import { API_VERSION, HOST} from "../utils";

export class Auth {
  async postSignUp(formData) {
    try {
      const url = `${HOST}/api/${API_VERSION}/auth/signup`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }

      const response = await fetch(url, params);
      const result = await response.json();

      return result;
    } catch (error) {
      console.log("🚀 ~ Auth ~ postSignUp ~ error:", "error: api/auth Auth().postSignUp");
      return false;
    }
  }

  async postSignIn(formData) {
    try {
      const url = `${HOST}/api/${API_VERSION}/auth/signin`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }

      const response = await fetch(url, params);
      const result = await response.json();

      return result;
    } catch (error) {
      console.log("🚀 ~ Auth ~ postSignIn ~ error:", "error: api/auth Auth().postSignUp");
      return false;
    }
  }

  setAccessToken(token) {
    localStorage.setItem("access", token);
  }

  getAccessToken() {
    return localStorage.getItem("access");
  }

  setRefreshToken(token) {
    localStorage.setItem("refresh", token);
  }

  getRefreshToken() {
    return localStorage.getItem("refresh");
  }

  removeTokens() {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
  }
}
