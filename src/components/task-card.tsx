import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import clsx from "clsx";
import { Task } from "@prisma/client";
import { TaskbuttonDelete } from "./task-button-delete";
import Link from "next/link";

export function Taskcard({ task }: { task: Task }) {
  return (
    <Card>
      <CardHeader className="bg-blue-600 flex flex-row justify-between">
        <CardTitle>{task.name}</CardTitle>
        <Badge
          className={clsx({
            "bg-red-500 text-white font-bold": task.priority === "high",
            "bg-yellow-500 text-white font-bold": task.priority === "medium",
            "bg-green-500 text-white font-bold": task.priority == "low",
            "bg-slate-800 text-white font-bold": task.priority == "urgent",
          })}
        >
          {task.priority}
        </Badge>
      </CardHeader>

      <CardContent>
        <p>{task.description}</p>
        <span className="text-slate-700">
          {new Date(task.createdAt).toLocaleDateString()}
        </span>
      </CardContent>
      <CardFooter className=" flex gap-x-2 justify-end">
        <TaskbuttonDelete taskId={task.id} />
        <Link
          href={`/tasks/${task.id}/edit`}
          className={buttonVariants({ variant: "secondary" })}
        >
          Edit
        </Link>
      </CardFooter>
    </Card>
  );
}
