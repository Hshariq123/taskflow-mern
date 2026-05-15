import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import styles from './ToDoList.module.css';
import { Button, Divider, Input, Modal } from 'antd';
function ToDoList() {
  const[title,setTitle]=useState("");
  const[description,setDescription]=useState("");
  const [isAdding,setIsAdding]=useState(false);
  return (
    <>
    <Navbar active={"myTask"}/>
    <section className={styles.toDoWrapper }>
      <div className={styles.toDoHeader}>
        <h2>Your Tasks</h2>
        <Input style={{width:'50%'}}placeholder='Search Your Task Here'/>
        <div>
          <Button type='primary' size='large'>Add Task</Button>
        </div>
      </div>
      <divider/>
      <Modal>

      </Modal>
    </section>
    </>
  )
}

export default ToDoList