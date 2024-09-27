import { fieldsProxy } from "@serenity-is/corelib";
import { Priority } from "../Modules/TaskDB.Task.Priority";
import { Status } from "../Modules/TaskDB.Task.Status";

export interface TaskRow {
    TaskId?: number;
    Title?: string;
    Description?: string;
    Status?: Status;
    DateCreated?: string;
    DateUpdated?: string;
    DueDate?: string;
    Priority?: Priority;
}

export abstract class TaskRow {
    static readonly idProperty = 'TaskId';
    static readonly nameProperty = 'Title';
    static readonly localTextPrefix = 'TaskDB.Task';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<TaskRow>();
}