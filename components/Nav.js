import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";

import { NavCss, NavItems } from "../styles/NavCss";

//Get context showCart
import { useStateContext } from "../lib/context";

//Components
import Cart from "./Cart";
import User from "./User"

//to see if User sign in or not
import { useUser } from "@auth0/nextjs-auth0";

//Animation of cart show off > AnimatePresence detect when component gets removed and acced to property motion like exit
const { AnimatePresence, motion } = require("framer-motion");

const Nav = () => {
  //* Set show cart
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  const {user, error, isLoading} = useUser()

  //console.log(user);

  return (
    <NavCss>
      <Link href={"/"}>Styled.</Link>
      <NavItems>
        <User />
        <div onClick={() => setShowCart(true)}>
          {totalQuantities > 0 && (
            <motion.span animate={{ scale: 1 }} initial={{ scale: 0 }}>
              {totalQuantities}
            </motion.span>
          )}
          <FiShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItems>
      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
    </NavCss>
  );
};

export default Nav;
