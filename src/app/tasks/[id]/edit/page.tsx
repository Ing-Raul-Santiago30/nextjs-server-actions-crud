import { Taskform } from "@/app/new/Task-form";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";


export default async function TaskPageEdit({params}: {
  params: {
    id: string
  }
}) {
  console.log({params})

  const task = await prisma.task.findFirst({
    where:{
      id: parseInt(params.id)
    }
  })
  if(!task){
    redirect("/")
  }
  console.log(task)
  return (
    <div className=" flex justify-center items-center h-screen">
      <Taskform task={task}/>
    </div>
  )
}

