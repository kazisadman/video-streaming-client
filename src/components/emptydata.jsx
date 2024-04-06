import PropTypes from "prop-types";

const Emptydata = ({contentType}) => {
  return (
    <div>
      <div className="text-center text-lg">No {contentType} to show</div>
    </div>
  );
};

Emptydata.propTypes = {
  contentType:PropTypes.string
};
export default Emptydata;

