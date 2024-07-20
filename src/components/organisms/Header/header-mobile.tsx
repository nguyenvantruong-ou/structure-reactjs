import { useState } from 'react';
import { Drawer, Button, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import theme from '@/styles/theme';
import styled from 'styled-components';

const { Item } = Menu;


const StyledButton = styled(Button)`
position: fixed;
top: 20px;
left: 20px;
z-index: 1000;
width: 40px;
height: 40px;
background: ${theme.colors.primary};
box-shadow: 0px 4px 10px rgba(0, 0, 255, 0.5); // Blue box-shadow

.icon {
  display: block;
  width: 20px;
  height: 2px;
  background-color: #fff;
  position: relative;
  transition: background-color 0.3s ease;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 2px;
    background-color: #fff;
    transition: transform 0.3s ease;
  }

  &::before {
    transform: translateY(-6px);
  }

  &::after {
    transform: translateY(6px);
  }
}

&.open .icon {
  background-color: transparent;

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
}
`;

const MobileMenu = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  return (
    <>
      <StyledButton
        type="primary"
        onClick={showDrawer}
        icon={<MenuOutlined />}
        style={{ position: 'fixed', top: 20, left: 20, zIndex: 1000, width: "40px", height: "40px", background: theme.colors.primary }}
      />
      <Drawer
        title="Menu"
        placement="left"
        closable={true}
        onClose={closeDrawer}
        visible={visible}
      >
        <Menu mode="inline" onClick={closeDrawer}>
          <Item key="1">
            <a href="#section1">Section 1</a>
          </Item>
          <Item key="2">
            <a href="#section2">Section 2</a>
          </Item>
          <Item key="3">
            <a href="#section3">Section 3</a>
          </Item>
        </Menu>
      </Drawer>
    </>
  );
};

export default MobileMenu;
