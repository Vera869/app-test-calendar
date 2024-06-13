import { Outlet } from "react-router-dom";
import { HeaderBox } from "../components/HeaderBox";

export const LayoutPage = () => {
  return (
    <>
      <HeaderBox/>
      <Outlet />
      <footer></footer>
    </>
  );
};