import React from 'react';
import PlaceHolderLongText from './PlaceHolderLongText';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import { ArrowDownOutlined } from '@ant-design/icons';

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
    },
});

function Main(props) {
    const classes = useStyles();
    const { onNavTop, title } = props;

    const [yOffset, setYOffset] = React.useState(window.pageYOffset);

    React.useEffect(() => {
        const handleScroll = () => {
            // if (window.pageYOffset <= 40) {
            //     setYOffset(window.pageYOffset);
            // } else if (window.pageYOffset - yOffset > 10) {
            //     setYOffset(window.pageYOffset);
            //     console.log(window.pageYOffset - yOffset);
            // }

            setYOffset(window.pageYOffset);
            if (window.pageYOffset <= 0) {
                onNavTop(true);
            } else {
                onNavTop(false);
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
        // eslint-disable-next-line
    }, []);
    
    return(
        <div>
            <div className={'Cover'} style={{backgroundPositionY: yOffset * 0.7}}>
                <div className={classes.coverTextContainer}>
                    <h1 className={classes.coverText}>{title}</h1>
                    <h2 style={{color: 'whitesmoke'}}>
                        <ArrowDownOutlined />
                    </h2>
                </div>
            </div>
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