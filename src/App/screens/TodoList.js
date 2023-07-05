import React, { useState } from 'react';
import styles from '../styles/TodoList.module.css';
import AddNewGoal from '../components/AddNewGoal';
import ShowGoals from '../components/ShowGoalList';

const TodoList = () => {
    const [course, setCourse] = useState([])

    const AddNewGoals = (text) => {
        let newItem = {
            id: course.length + 1,
            title: text,
        };
        let ff = [newItem, ...course];
        setCourse(ff);
    }
    const deleteHandler = (id) => {
        let res = course.filter(item => item?.id !== id)
        setCourse(res)
    }

    return (
        <div className={styles.todo}>
            <AddNewGoal AddNewGoal={AddNewGoals} />
            {course?.length > 0 && <ShowGoals course={course} deleteHandler={deleteHandler} />}
        </div>
    );
}

export default TodoList;
