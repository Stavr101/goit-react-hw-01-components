import PropTypes from 'prop-types';

export const StatList = ({ data }) => {
  return (
    <ul className="statlist">
      {data.map(data => (
        <li className="item" key={data.id}>
          <span className="label">{data.label}</span>
          <span className="percentage">{data.percentage}%</span>
        </li>
      ))}
    </ul>
  );
};

StatList.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
