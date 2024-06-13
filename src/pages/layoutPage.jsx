import { Outlet } from "react-router-dom";
import { HeaderBox } from "../components/HeaderBox";
import { MenuBox } from "../components/menu/MenuBox";

export const LayoutPage = () => {
  return (
    <div className="conteiner">
      
      <HeaderBox/>
      <MenuBox/>
      <Outlet />
      <footer></footer>
    </div>
  );
};