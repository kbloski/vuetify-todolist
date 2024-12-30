import { EnumTaskPriority } from "@/enum/EnumTaskPriority";

export type TypeTask = {
    id : number;
    // categoryId?: number; // in future
    title: string;
    description?: string;
    priority: EnumTaskPriority;
    dayPeriod?: {
        start: Date, 
        end: Date
    } 
}

