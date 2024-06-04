

export const isMoblie = ({ setWidth }) => {
    var mobile = false;
    if( setWidth ) {
        setWidth(window.innerWidth);
        mobile = window.innerWidth <= 600;
    }

    return mobile;
}