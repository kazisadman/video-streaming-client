import PropTypes from 'prop-types';

const Loader = ({size}) => {
    return (
        <div className='flex justify-center items-center'>
            <span className={`loading loading-dots loading-${size}`}></span>
        </div>
    );
};

Loader.propTypes = {
   size:PropTypes.string 
};

export default Loader;