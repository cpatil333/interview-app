import ProductItem from "./ProductItem";
import { type Product } from "../../types/productTypes";
import { useEffect, useState } from "react";
import { customApi } from "../../api/customApi";

const ProductList = () => {
  const [productData, setProductData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const fetchData = async (page: number) => {
      try {
        const response = await customApi.get(`/posts?_page=${page}&_limit=10`, {
          signal,
        });
        //const data = await response.data;
        setProductData((prev) => [...prev, ...response.data]);
        setLoading(false);
      } catch (error) {
        console.error("Something went wrong ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData(page);
    return () => controller.abort();
  }, [page]);

  //   console.log(productData);

  if (loading) return <p>Loading....</p>;

  return (
    <div>
      <ProductItem items={productData} />
      <button onClick={() => setPage((prev) => prev + 1)} disabled={loading}>
        {loading ? "loading..." : "Load More"}
      </button>
    </div>
  );
};

export default ProductList;
