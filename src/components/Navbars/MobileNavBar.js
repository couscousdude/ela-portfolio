import React from 'react';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import { createUseStyles } from 'react-jss';
import { PropTypes } from 'prop-types';
import { Typography, Button, Drawer } from 'antd';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const useStyles = createUseStyles({
    menuBar: {
        paddingRight: '20px',
        paddingTop: '10px',
        // display: 'flex',
        whiteSpace: 'nowrap',
        overflowX: 'auto',
        position: 'fixed',
        width: '100%',
        overflowY: 'hidden',
        transition: 'all 150ms ease-in;'
        // backgroundColor: 'transparent'
    },
    title: {
        display: 'inline-block',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
    },
    showNav: {
        backgroundColor: 'white',
        boxShadow: [
            [0, 0, 30, 0, '#f3f1f1']
        ],
        borderBottom: 'solid 1px #e8e8e8',
    },
    navButton: {
        display: 'inline-block',
        padding: {
            top: 5,
            left: 10,
            bottom: 5
        },
        marginBottom: '10px',
    },
    link: {
        fontSize: 20
    }
});

function MobileNavBar(props) {
    const { title, sections, navTransparent } = props;
    const classes = useStyles();

    const DrawerTitle = props => <Typography.Title level={4}><UserOutlined />{`   ${title}`}</Typography.Title>

    const [expanded, setExpanded] = React.useState(false);

    const handleToggleDrawer = () => {
        setExpanded(!expanded);
    }

    return(
        <nav 
            className={clsx(classes.menuBar, {
                [classes.showNav]: !navTransparent
            })}
        >
            <Drawer
                title={<DrawerTitle />}
                placement='left'
                closable={true}
                onClose={handleToggleDrawer}
                visible={expanded}
                key={title}
            >   
                { sections.map(section => (
                    <>
                        <hr />
                        <Link onClick={() => setExpanded(false)} to={section.href} className={classes.link}>{section.title}</Link>
                    </>
                ))}
            </Drawer>
            <span className={classes.navButton}>
                <Button icon={<MenuOutlined />} onClick={handleToggleDrawer} />
            </span>
            <div className={classes.title}>
                <Typography.Title level={2}>
                    <UserOutlined /> 
                    {`   ${title}`}
                </Typography.Title>
            </div>
        </nav>
    )
}
export default MobileNavBar;

MobileNavBar.propTypes = {
    sections: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    navTransparent: PropTypes.bool,
}
MobileNavBar.defaultProps = {
    navTransparent: true
}