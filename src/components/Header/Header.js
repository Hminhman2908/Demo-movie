import React from "react";
import { useSelector } from "react-redux";
import { userLocalStorage } from "../../page/api/localService";
import { useNavigate } from "react-router-dom";

export default function Header() {
  let { info } = useSelector((state) => {
    return state.userReducer;
  });

  let navigate = useNavigate();

  // Đăng Xuất
  let handleLogout = () => {
    userLocalStorage.remove();
    window.location.reload();
    // window.location.href = "/";
  };

  // Đăng Kí
  // Cách 1:
  // let handleLogin = () => (
  //   window.location.href = "/login"
  // );
  // Cách 2:
  let handleLogin = () => {
    return navigate("/login");
  };

  let renderUserNav = () => {
    let classBtn = "border-2 border-black rounded-xl px-7 py-3";
    //   Đã đăng nhập
    if (info) {
      return (
        <>
          <span>{info.hoTen}</span>
          <button onClick={handleLogout} className={classBtn}>
            Đăng Xuất
          </button>
        </>
      );
    } else {
      // Chưa đăng nhập
      return (
        <>
          <button onClick={handleLogin} className={classBtn}>
            Đăng Nhập
          </button>
          <button className={classBtn}>Đăng Kí</button>
        </>
      );
    }
  };

  return (
    <div className="h-20 flex items-center justify-between shadow-lg px-20">
      <span className="text-3xl font-medium text-red-600 animate-pulse">
        CyberFlix
      </span>
      <div className="space-x-5">{renderUserNav()}</div>
    </div>
  );
}
