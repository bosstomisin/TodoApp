import { Decorators } from "@serenity-is/corelib";

export enum Priority {
    Low = 1,
    Medium = 2,
    High = 3
}
Decorators.registerEnumType(Priority, 'ToDoApp.Modules.TaskDB.Task.Priority', 'TaskDB.Priority');