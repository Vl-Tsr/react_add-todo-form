import { Todo } from '../../types/todo';
import { UserInfo } from '../UserInfo';
import { findUser } from '../../services/findUser';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  return (
    <article
      data-id={todo.id}
      className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>

      {/* <a className="UserInfo" href="mailto:Sincere@april.biz">
        Leanne Graham
      </a> */}
      <UserInfo user={findUser(todo.userId)} />
    </article>
  );
};
