import { Trash } from "phosphor-react";
import { TaskProps } from "../../Types/typings";
import { Modal } from "../Modal/Modal";
import styles from "./Task.module.css";

export function Task({ todo, onCompletedTodo, onDeletedTask }: TaskProps) {
  return (
    <div className={`${styles.todo} ${todo.done ? styles.selectedTodo : ""}`}>
      <div className={styles.textContainer}>
        <a
          className={styles.link}
          onClick={() => onCompletedTodo(todo.id)}
          title="Completar tarefa"
        >
          <div className={styles.checkbox}></div>
          <p>{todo.task}</p>
        </a>
      </div>
      <div className={styles.informations}>
        <Modal
          todo={todo}
          onDeletedTask={onDeletedTask}
          onCompletedTodo={onCompletedTodo}
        />
        <button
          className={styles.trash}
          onClick={() => onDeletedTask(todo.id)}
          title="Excluir Tarefa"
        >
          <Trash size={24} />
        </button>
      </div>
    </div>
  );
}
