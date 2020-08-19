import React from 'react';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import { createUseStyles } from 'react-jss';
import { PropTypes } from 'prop-types';
import { Typography, Button, Drawer } from 'antd';
import { Link } from 'react-router-dom';

const useStyles = createUseStyles({
    menuBar: {
        paddingRight: '20px',
        paddingTop: '10px',
        borderBottom: 'solid 1px #e8e8e8',
        overflow: 'auto',
        boxShadow: [
            [0, 0, 30, 0, '#f3f1f1']
        ],
        // display: 'flex',
        whiteSpace: 'nowrap',
        overflowX: 'auto',
    },
    title: {
        display: 'inline-block',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
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
    const { title, sections } = props;
    const classes = useStyles();

    const DrawerTitle = props => <Typography.Title level={4}><UserOutlined />{`   ${title}`}</Typography.Title>

    const [expanded, setExpanded] = React.useState(false);

    const handleToggleDrawer = () => {
        setExpanded(!expanded);
    }

    return(
        <nav className={classes.menuBar}>
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
}