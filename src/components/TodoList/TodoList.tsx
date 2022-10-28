// Add the required types and props
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { Todo } from '../../types/TodoInfoType';

import './TodoList.scss';

type Props = {
  allTodos: Todo[],
};

export const TodoList: React.FC<Props> = ({ allTodos }) => (
  <ul className="TodoList">
    {allTodos.map((todo: Todo) => (
      <li key={todo.id} className="TodoList__item">
        <TodoInfo {...todo} />
      </li>
    ))}
  </ul>
);
