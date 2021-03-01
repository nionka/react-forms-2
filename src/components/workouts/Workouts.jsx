import { useState } from 'react';
import WorkoutsList from '../workoutsList/WorkoutsList';
import AddWorkout from '../addWorkout/AddWorkout';

function Workouts() {
    const [workouts, setWorkouts] = useState([]);
    const [edit, setEdit] = useState({});
    const handleAdd = workout => {
        setEdit({})
        if (workouts.some(o => o.date === workout.date)) {
            setWorkouts(prevWorkout => prevWorkout.map(o => {
                if (o.date === workout.date) {
                    return {id: workout.id, date: o.date, distance: +o.distance + +workout.distance}
                }
                return o
            }))   
        } else {
            setWorkouts(prevWorkout => [...prevWorkout, workout])
        }
    };

    const onDelete = id => {setWorkouts(workouts.filter(o => o.id !== id))}

    const onEdit = id => {
        const item = workouts.find(el => el.id === id);
        setEdit(item)
        onDelete(id)
    }

    return (
        <>   
        <AddWorkout onAdd={handleAdd} workoutEdit={edit} />
        <WorkoutsList workouts={workouts} onDelete={onDelete} onEdit={onEdit} />
        </>
    )
}

export default Workouts