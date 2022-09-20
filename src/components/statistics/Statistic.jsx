import PropTypes from 'prop-types';

import { StatList } from './Stats.jsx';
import { Box } from 'components/Box';
import { StatTitle } from './Statistic.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Box>
      {title && <StatTitle>{title}</StatTitle>}
      <StatList data={stats} />
    </Box>
  );
};

Statistics.propTypes = {
  stats: PropTypes.array,
  title: PropTypes.string,
};
