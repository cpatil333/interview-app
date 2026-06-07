import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import styles from "../../module/product.module.css";
import { useEffect, useState } from "react";
import { getProduct } from "../../services/productService";
import type { Cart } from "../../types/Cart";

const ProductDetails = () => {
  const navigate = useNavigate();
  const [plusMinus, setPlusMinus] = useState<number>(0);
  const [singleProduct, setSingleProduct] = useState({
    id: 0,
    title: "",
    price: 0,
    image: "",
    description: "",
    category: "",
  });
  const { id } = useParams();
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProduct(id);
      setSingleProduct({
        id: data?.id,
        title: data?.title,
        price: data?.price,
        image: data?.image,
        description: data?.description,
        category: data?.category,
      });
    };
    fetchProduct();
  }, [id]);

  const handleAdToCart = () => {
    addToCart({
      id: singleProduct.id,
      title: singleProduct.title,
      price: singleProduct.price,
      image: singleProduct.image,
      quantity: plusMinus,
    });
    navigate("/product-list");
  };
  return (
    <div className={styles.productDetails}>
      <h2>Product Details</h2>
      <div key={singleProduct?.id} className={styles.productInfo}>
        <div className={styles.detailImage}>
          <img src={singleProduct?.image} />
        </div>
        <div className={styles.singleProductInfo}>
          <h3 className={styles.singleProductTitle}>{singleProduct?.title}</h3>
          <p className={styles.singleProductDescription}>
            {singleProduct.description}
          </p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>price: {singleProduct?.price}</span>
            <div
              style={{
                display: "flex",
                margin: "10px auto",
                marginBottom: "10px",
              }}
            >
              <button
                className={styles.plusminus}
                onClick={() => setPlusMinus(plusMinus - 1)}
              >
                -
              </button>
              {plusMinus}
              <button
                className={styles.plusminus}
                onClick={() => setPlusMinus(plusMinus + 1)}
              >
                +
              </button>
            </div>
            <div className={styles.productBtn}>
              <button className={styles.addCart} onClick={handleAdToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
