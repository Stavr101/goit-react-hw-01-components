import PropTypes from 'prop-types';
import { StatTitle } from './Statistic.styled';

export const TitleList = ({ title }) => {
  return <StatTitle>{title}</StatTitle>;
};

TitleList.propTypes = {
  title: PropTypes.string,
};
