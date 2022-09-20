import PropTypes from 'prop-types';
import {
  StatistikList,
  StatItems,
  StatText,
  StatTitleText,
} from './Statistic.styled';

export const StatList = ({ data }) => {
  return (
    <StatistikList>
      {data.map(data => (
        <StatItems key={data.id}>
          <StatText>{data.label}</StatText>
          <StatTitleText>{data.percentage}%</StatTitleText>
        </StatItems>
      ))}
    </StatistikList>
  );
};

StatList.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
