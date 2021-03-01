import WorkoutItem from '../workoutItem/WorkoutItem';
import './workoutList.css'
import dateSort from '../../utilits/dateSort';
import PropTypes from 'prop-types';

function WorkoutsList({ workouts, onDelete, onEdit }) {

    return (
        <>
        <div className="list__title">
            <span>Дата (ДД.ММ.ГГ)</span>
            <span>Пройдено км</span>
            <span>Действия</span>
        </div>
        <ul className="list">
            {workouts
            .sort((a, b) => dateSort(a.date, b.date))
            .map((workout) => <WorkoutItem key={workout.id} workout={workout} onDelete={onDelete} onEdit={onEdit} />)}
        </ul>
        </>
    )    
}

WorkoutsList.propTypes = {
    workouts: PropTypes.array,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func
}

export default WorkoutsList