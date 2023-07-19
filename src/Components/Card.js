import PropTypes from "prop-types";

const Card = ({ children, reverse, create }) => {
  return (
    <div
      className="login-card"
      style={{
        // backgroundColor: reverse ? "#fff" : "#1c1c1c",
        // backgroundColor: create ? "#2E2E2E" : "#1c1c1c",
        color: reverse ? "#000" : "#fff",
        padding: create ? "4rem" : "3rem",
      }}
    >
      {children}
    </div>
  );
};

Card.defaultProps = {
  reverse: false,
  create: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
  create: PropTypes.bool,
};

export default Card;