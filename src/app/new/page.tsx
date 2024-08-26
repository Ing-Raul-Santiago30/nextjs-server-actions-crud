import * as React from "react";
import { Taskform } from "./Task-form";
import { Task } from "@prisma/client";

function NewPage() {
  // Define un objeto `task` con valores predeterminados
  const task: Task = {
    id: 0,
    name: '',
    description: '',
    priority: 'low',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Taskform task={task} />
    </div>
  );
}

export default NewPage;
