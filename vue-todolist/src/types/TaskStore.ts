import { TaskPriority } from "@/enum/TaskPriority";

export type Task = {
    id : number;
    title: string;
    description: string | undefined;
    priority: TaskPriority;
    // categoryId: number;
    // expires: number;

    createdAt: Date;
}

