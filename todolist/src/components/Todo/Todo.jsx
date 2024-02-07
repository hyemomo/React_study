import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import style from './Todo.module.css'
export default function Todo({ todo, onDelete, onUpdate }) {
const {text,id, status}=todo
const onChange=(e)=>{
    onUpdate({
        ...todo, status:e.target.checked? 'completed':'active'
    })
}
  return (
    
      <li className={style.todo} >
        <input className={style.checkbox} type="checkbox" id={id}  onChange={onChange} checked={status==="completed"?true:false} />
        <label htmlFor={id} className={style.text} >{text}</label>
        <FaRegTrashAlt
          onClick={() => {
            onDelete(id);
            
          }} className={style.button}
        />
      </li>
   
  );
}
