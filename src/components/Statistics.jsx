import PropTypes from 'prop-types';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
    <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p><b>Total</b>: {total}</p>
        <p><b>Positive Feedback</b>: {positivePercentage}%</p>
    </div>
)

Statistics.propTypes = {
    good: PropTypes.number.isRequired, 
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;