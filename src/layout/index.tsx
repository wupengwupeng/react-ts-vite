import { Outlet, Link } from "react-router-dom";
import BasicTabs from './nav/index'
export function LayOut() {
  return (
    <div>
      {/* 我是layout
      <div>
        <Link to={"/"}>about</Link>
        <Link to={"/home"}>home</Link>
      </div>
      <Outlet /> */}
      <BasicTabs />
    </div>
  );
}
