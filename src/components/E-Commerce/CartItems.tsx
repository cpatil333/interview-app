import { useCart } from "../../hooks/useCart";
import styles from "../../module/product.module.css";

const CartItems = () => {
  const { cartItems, clearCart } = useCart();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0,
  );

  return (
    <div className={styles.itemCarts}>
      {cartItems.length === 0 ? (
        <div>
          <p>Your cart is empty</p>
          <p>Continue Shopping...</p>
        </div>
      ) : (
        <div>
          <h2 style={{ color: "black", marginBottom: "10px" }}>
            Shopping Cart
          </h2>
          {cartItems.map((item) => {
            return (
              <div key={item.id} className={styles.subItems}>
                <div style={{ display: "flex" }}>
                  <img src={item.image} />
                  <div className={styles.subItemsTitle}>
                    <span>{item.title}</span>
                    <span>Price: {item.price}</span>
                    <span>Quantity : {item.quantity}</span>
                  </div>
                </div>
              </div>
            );
          })}
          <span>
            <hr />
          </span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>Total Items : {cartItems.length} </span>
            <span>Total Price: {totalPrice.toFixed(2)} </span>
          </div>
          <div>
            <button
              style={{ float: "right", width: "100px" }}
              className={styles.removeBtn}
              onClick={clearCart}
            >
              Clear Carts
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;
