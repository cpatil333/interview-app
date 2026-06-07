export const getProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      console.log("Something went wrong!");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProduct = async (id: string | undefined) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!response.ok) {
      console.log("Something went wrong!");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
