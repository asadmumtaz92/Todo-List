import React, { useState, useEffect } from 'react'
import styles from './styles/AddNewGoal.module.css'

const AddNewGoal = (props) => {

    const [courseGoal, setCourseGoal] = useState('')
    const [courseGoalError, setCourseGoalError] = useState('')

    const courseGoalHandler = (event) => {
        // setCourseGoalError('')
        setCourseGoal(event?.target?.value)
    }

    const addGoalHandler = () => {
        if (courseGoal) {
            props?.AddNewGoal(courseGoal)
            setTimeout(() => {
                setCourseGoal('')
            }, 500);
        }
        else {
            setCourseGoalError('Enter some text first...')
        }
    }
    useEffect(() => {
        setCourseGoalError('')
    }, [courseGoal])

    return (
        <div className={styles.box}>
            <div className={styles.innerBox}>
                <label className={styles.label}>Add Course Goal</label>
                <input type='text' value={courseGoal} className={styles.ip} onChange={courseGoalHandler} />
                {courseGoalError && <p className={styles.error}>{courseGoalError}</p>}
                <button className={styles.button} onClick={addGoalHandler}>Add Goal</button>
            </div>
        </div>
    )
}

export default AddNewGoal
