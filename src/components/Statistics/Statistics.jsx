import PropTypes from 'prop-types';
import {
  StatisticsForm,
  StatisticsTitle,
  StatisticsList,
  StatisticsItems,
} from './Statistics.styled';

const randomColor = () => {
  return (
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
  );
};

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsForm>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItems key={id} style={{ backgroundColor: randomColor() }}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </StatisticsItems>
        ))}
      </StatisticsList>
    </StatisticsForm>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
