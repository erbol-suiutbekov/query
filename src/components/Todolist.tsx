"use client";
import { usePostTodosMutation } from "@/redux/api/todo";
import scss from "./Todolist.module.scss";
import { useState } from "react";
const Todolist = () => {
  const [postTodosMutation] = usePostTodosMutation();
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const postTodo = async () => {
    const newPro = {
      url: url,
      title: name,
      price: price,
    };
    await postTodosMutation(newPro);
    setUrl("");
    setName("");
    setPrice("");
  };

  return (
    <div className={scss.todolist}>
      <div className="container">
        <div className={scss.content}>
          <h1>TodoList</h1>
          <div className={scss.product}>
            <input
              type="text"
              placeholder="url"
              onChange={(e) => setUrl(e.target.value)}
              value={url}
            />
            <input
              type="text"
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type="text"
              placeholder="price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
            <button onClick={postTodo}>Add Product</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todolist;
