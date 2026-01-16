import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser, selectUser } from "../store/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <header className="header">
      <h1>🛒 Интернет-магазин</h1>
      <div className="user-info">
        {user ? <span>Привет, {user.name}!</span> : <span>Загрузка...</span>}
      </div>
    </header>
  );
};
export default Header;
