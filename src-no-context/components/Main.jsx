import PropTypes from "prop-types";

Main.propTypes = {
  children: PropTypes.any.isRequired,
};

export default function Main({ children }) {
  return <main className="main">{children}</main>;
}
