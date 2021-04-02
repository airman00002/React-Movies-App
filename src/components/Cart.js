import React from "react";
const IMG_API = "https://image.tmdb.org/t/p/w500";
function Cart({ cartItems, setCartItems, Addmovie, RemoveMovie,price }) {
  let ShowCart = null;
  if (cartItems.length === 0) {
    ShowCart = <h3 >ไม่มีสินค้า</h3>;
  } else {
    ShowCart = cartItems.map((item) => {
      return (
        <div key={item.id} className="cartElements">
          <img
            src={IMG_API + item.poster_path}
            alt=""
            width="30px"
            height="30px"
          />
          <div className="">{item.title}</div>
          <div className="btnAdd-Remove">
            <button onClick={() => Addmovie(item)} className="add">
              +
            </button>
            <button onClick={() => RemoveMovie(item)} className="remove">
              -
            </button>
          </div>
          <div>
            <span>X {item.qty}</span>=
            {item.qty * price} บาท
          </div>
        </div>
      );
    });
  }

  let btnClear = null;
  if (cartItems.length > 0) {
    btnClear = <button onClick={() => setCartItems([])}>Clear</button>;
  }
  return (
    <div className="cart-container">
      <div className="cart-wrapper">
        <div className="flex-clear">
          <div className="item1">
            <h2>Cart Items</h2>
          </div>

          <div className="item2">
          {btnClear}
          </div>
        </div>
        <div className="cart-content">{ShowCart}</div>
      </div>
    </div>
  );
}

export default Cart;
