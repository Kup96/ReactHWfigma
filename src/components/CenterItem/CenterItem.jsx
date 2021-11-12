import React from 'react';
import classnames from 'classnames';
import styles from './CenterItem.module.css'

const CenterItem = (props) => {
    

//    const imageSide = "Section_";
//   if (props.info.isLeft === "True"){
//        imageSide += "left"
//   }else imageSide += "right";


    return(
       <div className = {props.info.isLeft ? styles.left : styles.right}>
           <image src = {props.info.image} alt = {props.info.alt}></image>
            <div className = {styles.text}>
                <h2>{props.info.title}</h2>
                <div className={styles.main}>{props.info.main}</div>
                <div className={styles.footer}>{props.info.footer}</div>
            </div>
       </div> 
    )


}

export default CenterItem;