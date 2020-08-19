import React from 'react';
import { Menu, Typography } from 'antd';
import { createUseStyles } from 'react-jss';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import clsx from 'clsx';

const useStyles = createUseStyles({
    menuBar: {
        padding: {
            top: 0,
            right: '20px'
        },
        overflow: 'auto',
        // display: 'flex',
        whiteSpace: 'nowrap',
        overflowX: 'auto',
        // position: 'relative'
        position: 'fixed',
        width: '100%',
        transition: 'all 150ms ease-in;'
    },
    showNav: {
        backgroundColor: 'white',
        boxShadow: [
            [0, 0, 30, 0, '#f3f1f1']
        ],
        borderBottom: 'solid 1px #e8e8e8',
    },
    menu: {
        display: 'inline-block',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
    },
    title: {
        display: 'inline-block',
        marginTop: 5,
        marginLeft: 20
        // position: 'absolute'
        // width: '100%',
    }
});

function NavBar(props) {
    const classes = useStyles();
    const { title, sections, active, navTransparent } = props;

    return (
        <nav 
            className={clsx(classes.menuBar, {
                [classes.showNav]: !navTransparent
            })}
        >
           <div className={classes.title}>
                <Typography.Title level={2}>
                    <UserOutlined /> 
                    {`   ${title}`}
                </Typography.Title>
            </div>
            <div className={classes.menu}>
                <Menu mode='horizontal' selectedKeys={[active]}>
                { sections.map(item => (
                    <Menu.Item key={item.key} component={Link} to={item.href}>
                        {item.title}
                    </Menu.Item>
                ))}
                </Menu>
            </div>
        </nav>
    )
}
NavBar.propTypes = {
    sections: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    active: PropTypes.string.isRequired,
    navTransparent: PropTypes.bool,
}
NavBar.defaultProps = {
    navTransparent: true
}

export default NavBar;