import React from 'react';
import { NavBar} from 'antd-mobile';
import { MenuOutlined } from '@ant-design/icons';

function MobileNavBar(props) {
    return(
        <NavBar
            mode='dark'
            icon={<MenuOutlined />}
        >
            Youwen Wu
        </NavBar>
    )
}
export default MobileNavBar;