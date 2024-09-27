import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { Status } from "../Modules/TaskDB.Task.Status";
import { TaskRow } from "./TaskRow";

export interface TaskColumns {
    TaskId: Column<TaskRow>;
    Title: Column<TaskRow>;
    Description: Column<TaskRow>;
    Status: Column<TaskRow>;
    Priority: Column<TaskRow>;
    DateCreated: Column<TaskRow>;
    DueDate: Column<TaskRow>;
}

export class TaskColumns extends ColumnsBase<TaskRow> {
    static readonly columnsKey = 'TaskDB.Task';
    static readonly Fields = fieldsProxy<TaskColumns>();
}

[Status]; // referenced types