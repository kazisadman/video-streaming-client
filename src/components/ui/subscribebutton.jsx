import PropTypes from 'prop-types';

const Subscribebutton = ({isSubscribed}) => {
    return (
      <div className="my-5">
        <button className="btn btn-xs sm:btn-sm md:btn-md">
          Subscribe
        </button>
      </div>
    );
};

Subscribebutton.propTypes = {
    isSubscribed:PropTypes.bool
};

export default Subscribebutton;