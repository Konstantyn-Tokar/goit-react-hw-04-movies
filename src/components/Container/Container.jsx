import style from "./Container.module.css";
import PropTypes from "prop-types";

function Container({ children }) {
  return <div className={style.container}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.object.isRequired,
  ]),
};

export default Container;
