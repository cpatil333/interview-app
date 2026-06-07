import { Link } from "react-router-dom";
import styles from "../../module/navbar.module.css";
import { useCart } from "../../hooks/useCart";
const Navbar = () => {
  const { cartItems } = useCart();
  return (
    <div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/" className={styles.link}>
              Home
            </Link>
            <Link to="/product-list" className={styles.link}>
              Product
            </Link>
            <Link to="/cart-items" className={styles.cardCount}>
              Cart ({cartItems.length})
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
