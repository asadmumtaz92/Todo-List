import React from 'react'
import styles from './styles/ShowGoalList.module.css'

const ShowGoals = (props) => {

    const onClickHandler = (id) => {
        props?.deleteHandler(id)
    }

    const RenderItem = (item) => {
        let itemData = item?.item;
        return (
            <div className={styles.titleBox}>
                <p className={styles.course_title} key={itemData?.id}>
                    {itemData?.title}
                </p>
                <p className={styles.delete} onClick={() => onClickHandler(itemData?.id)}>x</p>
            </div>
        )
    }

    return (
        <div className={styles.box1}>
            <div className={styles.innerBox1}>
                {props.course.map(item => {
                    return <RenderItem item={item} key={item?.id} />
                })}
            </div>
        </div>
    )
}

export default ShowGoals
