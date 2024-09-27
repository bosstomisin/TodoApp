import { Decorators } from "@serenity-is/corelib";

export enum Status {
    Pending = 1,
    In_Progress = 2,
    Completed = 3
}
Decorators.registerEnumType(Status, 'ToDoApp.Modules.TaskDB.Task.Status', 'TaskDB.Status');