import CreateTodo from "./create-todo";
import UserCard from "./UserCard";

const Card = () => {
  return (
    <div>
      <h1>Hello Card Components</h1>
      <CreateTodo />
      <UserCard name="" profession="Software engineer" />
      <UserCard name="Vijay Suneja" profession="DevOps engineer" />
    </div>
  );
};

export default Card;
