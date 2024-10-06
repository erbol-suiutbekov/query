import AddTodolist from "@/components/AddTodolist";
import Todolist from "@/components/Todolist";

const page = () => {
  return (
    <div>
      <Todolist />
      <AddTodolist/>
    </div>
  );
};

export default page;
