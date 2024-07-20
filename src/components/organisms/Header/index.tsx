// src/components/CustomMenu.tsx
import React from "react";
import { Menu as AntdMenu, Button } from "antd";
import * as Styled from "./style";
import { useState, useEffect } from "react";
import { screenSizes } from "@/styles/breakpoints";
import { navigationMenu } from "./contants";

const { SubMenu } = AntdMenu;

const Header: React.FC = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {windowSize.width > screenSizes.sm ? (
        <Styled.Header>
          <Styled.Wrapper>
            <Styled.Logo>
              LOGO
            </Styled.Logo>
            <Styled.MenuContainer>
              {navigationMenu.map((s) => (
                <Styled.MenuItem href={s.url}>{s.name}</Styled.MenuItem>
              ))}
            </Styled.MenuContainer>
          </Styled.Wrapper>
        </Styled.Header>
      ) : (
        <Styled.MobileMenu />
      )}
    </>
  );
};

export default Header;
