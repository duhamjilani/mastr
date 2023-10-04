import React,{useContext} from "react";
import NavBar from "../NavBar";
import { UserContext } from "../context/User";

function Layout({ children }) {
  const { userData } = useContext(UserContext);

  return <> 
  {children}
  {!!userData &&
    <NavBar />
  }
   </>;
}

export default Layout;
