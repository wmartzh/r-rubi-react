import instance from "./axiosInstance";

export async function authenticate(email, password) {
  try {
    const response = await instance.post("/auth/login", {
      email,
      password,
    });
    instance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${response.data.accessToken}`;
    localStorage.setItem("authKey", response.data.accessToken);
    return true;
  } catch (error) {
    return false;
  }
}

export async function verify(token) {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  try {
    const response = await instance.get("/auth/verify");
    return response.data;
  } catch (error) {
    return false;
  }
}
