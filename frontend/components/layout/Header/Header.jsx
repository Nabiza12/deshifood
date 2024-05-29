import React, { useEffect } from 'react';
import { CgProfile, CgShoppingCart } from 'react-icons/cg';
import { MdFavoriteBorder } from 'react-icons/md';
// import { IoCartOutline,  } from 'react-icons/io';
import "./Header.scss"
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { getUserByEmail, logOut, setUser, toggleLoading } from '@/features/auth/authSlice';
import auth from '@/firebase/irebase.config';
function Header() {
  const {email} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const {cart,totalQuantity} = useSelector(state => state.cart);
  console.log("cart", cart)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user---->", user);
        dispatch(getUserByEmail(user.email));
        // dispatch(setUser({ email: user.email }));
      }else{
        dispatch(toggleLoading());
      }
    });
  }, []);
  const handleSignOut = () => {
    signOut((auth)).then(() => {
      dispatch(logOut())
    }).catch((error) => {
      console.log(error);
    });
  }
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__wrp">
        <div className="header__lft">
          <div  className="header__lft__logo">
          <Link href="/">

            <img src="/assets/images/brandicon.svg" alt="" />
          </Link>
          </div>
        </div>
        <div className="header__rgt">
          <button className="header__btn--icon flex">
            <Link className='text-xl' href={email ? "/dashboard" : "/login"}>
              {
                email ? "Dashboard" : "Login"
              }
            </Link>
          </button>
          {
            email && (<button onClick={handleSignOut} className="header__btn--icon flex">
            Logout
          </button>)
          }
          <button className="header__btn--icon">
            <MdFavoriteBorder />
          </button>
          <Link href="/cart" className="header__btn--icon relative">
          <span className="text-sm bg-orange-400 p-1 px-[10px] rounded-full absolute top-[-10px] left-[20px]">
            {totalQuantity}
          </span>
            <CgShoppingCart />
          </Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Header;