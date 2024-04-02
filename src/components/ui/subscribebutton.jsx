import PropTypes from "prop-types";

const Subscribebutton = ({ isSubscribed }) => {
  return (
    <div className="">
      {!isSubscribed ? (
        <button className="btn btn-xs sm:btn-sm md:btn-md">Subscribe</button>
      ) : (
        <button className="btn btn-xs sm:btn-sm md:btn-md">Subscribed</button>
      )}
    </div>
  );
};

Subscribebutton.propTypes = {
  isSubscribed: PropTypes.bool,
};

export default Subscribebutton;
