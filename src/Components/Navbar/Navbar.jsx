import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <img
        src="https://res.cloudinary.com/du1t4rnvs/image/upload/v1677278748/sneaker-sport-shoe-logo-vector_thydww.jpg"
        alt=""
        style={{ width: "10%", objectFit: "cover" }}
      />
      <div>
        <ul className={styles.listaNavbar}>
          <a href="#">
            <li>Inicio</li>
          </a>
          <a href="#">
            <li>Contacto</li>
          </a>
          <a href="#">
            <li>Quienes somos</li>
          </a>
        </ul>
      </div>
      <CartWidget />
    </div>
  );
};

export default Navbar;
