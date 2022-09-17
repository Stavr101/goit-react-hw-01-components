import PropTypes from 'prop-types';

// import data from 'data/data.json';
import { TitleList } from './Title';
import { StatList } from './Stats.jsx';
import { Box } from 'components/Box';

export const Statistics = ({ data }) => {
  return (
    <Box>
      <TitleList title="Upload stats" />
      <StatList data={data} />
    </Box>
  );
};

Statistics.propTypes = {
  data: PropTypes.array,
};
