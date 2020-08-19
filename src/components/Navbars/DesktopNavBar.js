import React from 'react';
import { Menu } from 'antd';
import { createUseStyles } from 'react-jss';
import { PropTypes } from 'prop-types';
import { Typography } from 'antd';

const useStyles = createUseStyles({
    menuBar: {
        padding: {
            top: 0,
            right: '20px'
        },
        borderBottom: 'solid 1px #e8e8e8',
        overflow: 'auto',
        boxShadow: [
            [0, 0, 30, 0, '#f3f1f1']
        ],
        // display: 'flex',
        whiteSpace: 'nowrap',
        overflowX: 'auto',
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
    const { title, sections, active } = props;

    return (
        <nav className={classes.menuBar}>
            <div className={classes.title}>
                <Typography.Title level={2}>
                    Youwen Wu
                </Typography.Title>
            </div>
            <div className={classes.menu}>
                <Menu mode='horizontal' selectedKeys={[active]}>
                { sections.map(item => (
                    <Menu.Item key={item.key}>
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
    active: PropTypes.string.isRequired
}

export default NavBar;