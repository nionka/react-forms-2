import './workoutItem.css';
import PropTypes from 'prop-types';

function WorkoutItem({ workout, onDelete, onEdit }) {
    const { id, date, distance } = workout;

    return (
        <li className="item">
            <span>{date}</span>
            <span>{distance}</span>
            <div>
                <button onClick={() => onEdit(id)}>✎</button>
                <button onClick={() => onDelete(id)}>✗</button>
            </div>
        </li>
    )   
}

WorkoutItem.propTypes = {
    workout: PropTypes.object,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func
}

export default WorkoutItem