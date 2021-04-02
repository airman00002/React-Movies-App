import React, { useState } from "react";
import Countdown from "react-countdown";

const IMG_API = "https://image.tmdb.org/t/p/w500";
function Cart({ cartItems, setCartItems, Addmovie, RemoveMovie, price }) {
  const [show, setShow] = useState(null);
  //*แสดงสินค้า
  let ShowCart = null;
  if (cartItems.length === 0) {
    ShowCart = <h3>ไม่มีสินค้า</h3>;
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
          <div className="">
            <span>X {item.qty}</span>={item.qty * price} บาท
          </div>
        </div>
      );
    });
  }
  //*Clear Cart
  let btnClear = null;
  if (cartItems.length > 0) {
    btnClear = <button onClick={() => setCartItems([])}>Clear</button>;
  }

  //*ราคารวมสินค้า
  const totalPrice = cartItems.reduce((sum, item) => {
    return sum + item.qty * price;
  }, 0);

  //*ผลรวมจำนวน
  const total_qty = cartItems.reduce((sum, item) => sum + item.qty, 0);
  let Total_Discount = 0;
  if (total_qty >= 3 && total_qty < 5) {
    Total_Discount = totalPrice - (totalPrice * 10) / 100;
  } else if (total_qty >= 5) {
    Total_Discount = totalPrice - (totalPrice * 20) / 100;
  } else {
    Total_Discount = totalPrice;
  }

  let ShowTotal = null;
  if (cartItems.length > 0) {
    ShowTotal = (
      <div className="total-Price">
        <div className="total_btn">
          <button onClick={() => onOpenClick(Total_Discount)}>Buy Movie</button>
        </div>
        <h2 className="totaltext">Total Price : </h2>
        <h2>
          {Total_Discount} บาท
          {total_qty >= 3 && total_qty < 5 && (
            <span style={{ fontSize: 15, color: "red" }}> ลด 10 %</span>
          )}
          {total_qty >= 5 && (
            <span style={{ fontSize: 15, color: "red" }}> ลด 20 %</span>
          )}
        </h2>
      </div>
    );
  } else {
    ShowTotal = null;
  }

  let showBuy = null;
  if (!!show) {
    showBuy = (
      <div className="Buy">
        <div className="Buy-bg" onClick={onCloseClick}></div>
        <div className="Buy-content">
          <div className="Buy-text">
            <div className="Buy-credit">
              <h4>ช่องทางการชำระเงิน</h4>
              <p>True Wallet : 000</p>
              <p>KrungThai Next : 000</p>
              <p>Prompay:000</p>
            </div>
            <div className="buy-countdown" style={{ textAlign: "center" }}>
              <h4>กรุณาชำระเงินก่อนหมดเวลา</h4>
              <Countdown date={Date.now() + 60000} />
            </div>
          </div>
          <div className="Buy-confirm">
            <button onClick={() => setCartItems([]) || setShow(null)}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    );
  }

  //*Open Edit
  function onOpenClick(any) {
    setShow(any);
  }
  function onCloseClick() {
    setShow(null);
  }

  return (
    <div className="cart-container">
      {showBuy}
      <div className="cart-wrapper">
        <div className="flex-clear">
          <div className="item1">
            <h1>Cart Items</h1>
          </div>

          <div className="item2">{btnClear}</div>
        </div>
        <div className="cart-content">{ShowCart}</div>
        {ShowTotal}
      </div>
    </div>
  );
}

export default Cart;
