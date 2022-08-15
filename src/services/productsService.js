import instance from "./axiosInstance";

export async function getProducts() {
  try {
    const response = await instance.get("/products");
    console.log(
      "🔰 > file: productsService.js > line 6 > getProducts > response",
      response
    );

    return response.data;
  } catch (error) {}
}
