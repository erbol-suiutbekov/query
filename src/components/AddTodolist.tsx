"use client";
import {
  useDeleteTodosMutation,
  useGetTodosQuery,
  usePatchTodosMutation,
} from "@/redux/api/todo";
import scss from "./AddTodolist.module.scss";
import { FC, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { SubmitHandler, useForm } from "react-hook-form";
interface iTodoForm {
  title: string;
  price: string;
  url: string;
}
const AddTodolist: FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm<iTodoForm>();
  const { data } = useGetTodosQuery();
  const [deleteTodosMutation] = useDeleteTodosMutation();
  const [patchTodosMutation] = usePatchTodosMutation();
  const [editId, setEditId] = useState<number | null>(null);
  console.log(data);

  const patchTodo: SubmitHandler<iTodoForm> = async (data) => {
    await patchTodosMutation({ _id: editId!, newDate: data });
    setEditId(null);
  };

  return (
    <div className={scss.addtodo}>
      <div className="container">
        <div className={scss.content}>
          {data?.map((el) => (
            <>
              {editId === el._id ? (
                <form onSubmit={handleSubmit(patchTodo)} className={scss.form}>
                  <input
                    type="text"
                    placeholder="edid url"
                    {...register("url", { required: true })}
                  />
                  <input
                    type="text"
                    placeholder="edid name "
                    {...register("title", { required: true })}
                  />
                  <input
                    type="text"
                    placeholder="edid price"
                    {...register("price", { required: true })}
                  />
                  {isSubmitting ? (
                    <>
                      {setTimeout(() => {
                        <button type="button">loading</button>;
                      }, 3000)}
                    </>
                  ) : (
                    <div className={scss.btn}>
                      <button type="submit">save</button>
                      <button type="button" onClick={() => setEditId(null)}>
                        cancel
                      </button>
                    </div>
                  )}
                </form>
              ) : (
                <div className={scss.navpro}>
                  <img src={el.url} alt="" />
                  <h2>{el.price}$</h2>
                  <h1>{el.title}</h1>
                  <div className={scss.pro}>
                    <button
                      onClick={() => {
                        setEditId(el._id!), setValue("title", el.title);
                      }}
                    >
                      edit
                    </button>
                    <a
                      className=""
                      onClick={() => deleteTodosMutation(el._id!)}
                    >
                      <MdDeleteForever />
                    </a>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddTodolist;
