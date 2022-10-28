// Add the required types and props
import React from 'react';
import { Todo } from '../../types/TodoInfoType';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

export const TodoInfo: React.FC<Todo> = (todo) => (
  <article className={`TodoInfo ${todo.completed && 'TodoInfo--completed'}`}>
    <UserInfo {...todo.user} />
    <h2 className="TodoInfo__title">{todo.title}</h2>
    <p className="TodoInfo__status">
      {todo.completed ? '✅ Done ✅' : '⭕️ To Do ⭕️'}
    </p>
  </article>
);
