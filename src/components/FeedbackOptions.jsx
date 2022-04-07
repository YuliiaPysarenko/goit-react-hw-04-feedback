import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
    margin: 3px;
    padding: 2px 10px;
    background-color: #fff;
    border: 1px solid #b6b6b6;
    border-radius: 5px;
    cursor: pointer;
`

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
    <div>
        {options.map(name => (<Button onClick={onLeaveFeedback} key={name} name={name}>{name}</Button>))}
    </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;