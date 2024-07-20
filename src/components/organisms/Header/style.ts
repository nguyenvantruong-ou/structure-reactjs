import styled from "styled-components";
import MobileMenuComponent from "./header-mobile";
import theme from "@/styles/theme";

export const Header = styled.header`
  width: 100%;
  padding: 5px 0;
  background-color: white;
`;

export const Wrapper = styled.div`
  max-width: 80em;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  margin-left: 2rem;
  color: black;
  font-size: 24px;
  font-weight: bold;
`;

export const Img = styled.img`
  max-width: 280px;
  transition: all 0.2s linear;
`;

export const MenuContainer = styled.div`
  margin-top: 70px;
  margin-right: 2rem;
  display: inline-block;
  align-items: center;
  min-width: 400px;
  overflow-x: auto;
  white-space: nowrap;
`;

export const MenuItem = styled.a`
  margin: 0 10px;
  display: inline-block;
  padding: 7px;
  text-decoration: none;
  color: ${theme.colors.textBold};
  position: relative;
  font-weight: 600;
  font-size: 18px;

  &:hover::after {
    transform: scaleX(1);
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${theme.colors.primary};
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
`;

export const MobileMenu = styled(MobileMenuComponent)``;
