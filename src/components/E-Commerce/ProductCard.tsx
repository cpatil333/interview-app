import type { Product } from "../../types/product";
import styles from "../../module/product.module.css";
import { useNavigate } from "react-router-dom";

type ProductProps = {
  products: Product[];
};
const ProductCard = ({ products }: ProductProps) => {
  const navigate = useNavigate();

  return (
    <div className={styles.productGrid}>
      {products?.map((product: Product) => (
        <div key={product.id} className={styles.productInfo}>
          <div className={styles.image}>
            <img src={product?.image} />
          </div>
          <div className={styles.productInfo}>
            <h3 className={styles.productTitle}>{product?.title}</h3>
            {/* <p className={styles.productDescription}>{product.description}</p> */}
            <div>
              <span>price: {product?.price}</span>
              <div>
                <button
                  onClick={() => navigate(`/prodct-details/${product.id}`)}
                >
                  Product Details
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
