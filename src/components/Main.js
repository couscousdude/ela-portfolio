import React from 'react';
import PlaceHolderLongText from './PlaceHolderLongText';
import { createUseStyles } from 'react-jss';
import cityImage from '../assets/city_img2.jpg';
import VisibilitySensor from 'react-visibility-sensor';
import PropTypes from 'prop-types';
import { ArrowDownOutlined } from '@ant-design/icons';
import { Parallax } from 'react-scroll-parallax';

const useStyles = createUseStyles({
    root: {

    },
    rest: {
        backgroundSize: 'cover'
    },
    coverTextContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    coverText: {
        textAlign: 'center',
        marginTop: '25vh',
        fontWeight: '600',
        color: 'white'
    }
});

function Main(props) {
    const classes = useStyles();
    const { onNavTop, title } = props;

    return(
        <div>
            <VisibilitySensor onChange={event => onNavTop(event)}>
                {/* <Parallax> */}
                    <div className={'Cover'}>
                        <div className={classes.coverTextContainer}>
                            <h1 className={classes.coverText}>{title}</h1>
                            <h2 style={{color: 'whitesmoke'}}>
                                <ArrowDownOutlined />
                            </h2>
                        </div>
                    </div>
                {/* </Parallax> */}
            </VisibilitySensor>
            <div className={classes.rest}>
                <PlaceHolderLongText />
            </div>
        </div>
    )
}
export default Main;
Main.propTypes = {
    onNavTop: PropTypes.func,
    title: PropTypes.string.isRequired
}
Main.defaultProps = {
    onNavTop: () => void 0
}