import { Outlet } from "react-router-dom";
import Header from "../../components/organisms/Header";
import * as Styled from "./style"; 
import Footer from "@/components/organisms/Footer";

const MainLayout = () => {
  return (
    <Styled.LayoutContainer>
      <Header />
      <Outlet />
      <Footer />
    </Styled.LayoutContainer>
  );
};

export default MainLayout;
