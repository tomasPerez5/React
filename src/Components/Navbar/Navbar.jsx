import styles from "./Navbar.module.css";

import CartWidget from "../CartWidget/CartWidget";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase";

const Navbar = ({ children }) => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const itemsCollection = collection(db, "categories");
    getDocs(itemsCollection).then((res) => {
      let arrayCategories = res.docs.map((category) => {
        return {
          ...category.data(),
          id: category.id,
        };
      });
      setCategoryList(arrayCategories);
    });
  }, []);

  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/" style={{ color: "#e1d4c7", textDecoration: "none" }}>
          <img
            src="https://res.cloudinary.com/du1t4rnvs/image/upload/v1677278748/sneaker-sport-shoe-logo-vector_thydww.jpg"
            alt="" style={{ width: "100%", objectFit: "cover", height: "102px" }}
          />
        </Link>

        <ul className={styles.containerList}>
          {categoryList?.map((category) => {
            return (
              <Link
                key={category.id}
                to={category.path}
                className={styles.navbarItem}
              >
                {category.title}
              </Link>
            );
          })}
        </ul>
        <CartWidget />
      </div>
      {children}
    </div>
  );
};

export default Navbar;
