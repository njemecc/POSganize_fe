import styles from "./CartItem.module.css";

//icons
import { HiTrash } from "react-icons/hi2";

//redux
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/slices/cartSlice";
//toast
import { toast } from "react-hot-toast";

const CartItem = ({ image, name, price, id }) => {
  const dispatch = useDispatch();

  const removeFromCartHandler = () => {
    dispatch(cartActions.removeFromCart(id));
    toast.success(`${name} removed from package`);
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={name} className={styles.itemImage} />
      </div>
      <div className={styles.itemDetails}>
        <h3 className={styles.itemName}>{name}</h3>
        <p className={styles.itemPrice}>${price}</p>
      </div>
      <button onClick={removeFromCartHandler} className={styles.deleteButton}>
        <HiTrash />
      </button>
    </div>
  );
};

export default CartItem;
