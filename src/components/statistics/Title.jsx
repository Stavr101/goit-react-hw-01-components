import PropTypes from 'prop-types';

export const TitleList = ({ title }) => {
  return <h2 className="title">{title}</h2>;
};

TitleList.propTypes = {
  title: PropTypes.string,
};
