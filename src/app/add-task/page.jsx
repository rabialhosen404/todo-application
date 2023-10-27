'use client'
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
// export const metadata = {
//   title: "Add Task : Work Manager",
// };
const Page = () => {

  const [ task, setTask ] = useState({
    title:'',
    content:'',
    status:'',
    userId:''
  })
  function handelSubmit(event) {
    event.preventDefault();
    console.log(task);

  }

  return (
    <div className="flex justify-center bg-slate-200 h-full p-6">
      <div className="w-[50%] bg-neutral-300  my-4 px-4 py-4 rounded-xl flex   flex-col gap-4 ">
        <div className="flex items-center justify-center">
          <Image src="/todo.svg" width={180} height={100} alt="Todo" />
        </div>
        <h1 className="text-center text-xl text-red-500">
          ADD YOUR TASK HERE !!
        </h1>
        <form
          action=""
          className="flex flex-col justify-between gap-2 h-full text-black"
          onSubmit={handelSubmit}
        >
          <label htmlFor="task_title">Title : -</label>
          <input
            className="rounded-lg px-2 py-2 outline-none text-black"
            type="text"
            placeholder="Add Title"
            id="task_title"
            name="task_title"
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            value={task.title}
          />
          <label htmlFor="task_content">Description : -</label>
          <textarea
            className="rounded-lg px-2 py-2 outline-none text-black"
            type="text"
            placeholder="Description"
            id="task_content"
            onChange={(e) => setTask({ ...task, content: e.target.value })}
            value={task.content}
          />
          <div className="w-full">
            <label htmlFor="task_status">Status : - </label>
            <select
              id="task_status"
              className="inline-block w-full rounded-lg py-2 px-1 outline-none"
              onChange={(e) => setTask({ ...task, status: e.target.value })}
              value={task.status}
            >
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className=" flex justify-center items-center gap-4 mb-2 mt-auto">
            <button className="px-4 py-2 rounded-xl bg-blue-400 hover:bg-blue-600 ">
              Add
            </button>
            <button className="px-4 py-2 rounded-xl bg-red-400 hover:bg-red-600 ">
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
