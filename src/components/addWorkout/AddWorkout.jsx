import './addWorkout.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
const shortid = require('shortid');

function AddWorkout({ onAdd, workoutEdit }) {
    const [form, setForm] = useState({ date: '', distance: '' });
    

    if (Object.keys(workoutEdit).length !== 0 && form.id !== workoutEdit.id) {
        setForm({ id: workoutEdit.id, date: workoutEdit.date, distance: workoutEdit.distance})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form.date.trim() === '' || form.date.length !== 8 ) return null
        if (form.distance.trim() === '' || !Number(form.distance)) return null

        const workout = { id: shortid.generate(), ...form };
        onAdd(workout)
        setForm({ date: '', distance: '' })
    }

    const onAddWorkout = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({...prevForm, [name]: value}));   
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label>
                <span>Дата (ДД.ММ.ГГ)</span>
                <input className="input" name="date" value={form.date} onChange={onAddWorkout}></input>
            </label>
            <label>
                <span>Пройдено км</span>
                <input className="input" name="distance" value={form.distance} onChange={onAddWorkout}></input>
            </label>
            <button className="ok" type="submit">OK</button>    
        </form>
    )    
}

AddWorkout.propTypes = {
    onAdd: PropTypes.func,
    workoutEdit: PropTypes.object
}

export default AddWorkout