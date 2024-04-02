import PropTypes from "prop-types";

const Avatar = ({size,url}) => {
  return (
    <div>
      <div className="avatar">
        <div className={`w-${size} rounded-full`}>
          <img src={url} />
        </div>
      </div>
    </div>
  );
};

Avatar.propTypes = {
    size:PropTypes.string,
    url:PropTypes.string,
};

export default Avatar;
