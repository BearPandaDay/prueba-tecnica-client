import { API_VERSION, HOST} from "../utils";

export class User {
  async getMe(accessToken) {
    try {
      const url = `${HOST}/api/${API_VERSION}/user/me`;
      console.log("🚀 ~ User ~ getMe ~ url:", url)
      
      const params = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      return {msg: "Error al ejecutar getMe", status: false}
    }
  }
}