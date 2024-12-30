import { EnumTaskPriority } from "@/enum/EnumTaskPriority";

export type TypeTask = {
    id : number;
    title: string;
    description: string | undefined;
    priority: EnumTaskPriority;
    // categoryId: number;
    // expires: number;

    createdAt: Date;
}

