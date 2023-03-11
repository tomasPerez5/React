import styles from "./Navbar.module.css";

import CartWidget from "../CartWidget/CartWidget";

import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  let numero = 12;
  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/du1t4rnvs/image/upload/v1677278748/sneaker-sport-shoe-logo-vector_thydww.jpg"
            alt=""
            style={{ width: "100%", objectFit: "cover", height: "102px" }}
          />
        </Link>
        <ul className={styles.containerList}>
          <Link to="/" className={styles.navbarItem}>
            Todas
          </Link>
          <Link to="/category/deportivas" className={styles.navbarItem}>
            Deportivas
          </Link>
          <Link to="/category/urbanas" className={styles.navbarItem}>
            Urbanas
          </Link>
        </ul>
        <CartWidget numero={numero} />
      </div>
      {children}
    </div>
  );
};

export default Navbar;
