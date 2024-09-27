import { StringEditor, TextAreaEditor, EnumEditor, DateEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";
import { Priority } from "../Modules/TaskDB.Task.Priority";
import { Status } from "../Modules/TaskDB.Task.Status";

export interface TaskForm {
    Title: StringEditor;
    Description: TextAreaEditor;
    Status: EnumEditor;
    Priority: EnumEditor;
    DueDate: DateEditor;
}

export class TaskForm extends PrefixedContext {
    static readonly formKey = 'TaskDB.Task';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!TaskForm.init)  {
            TaskForm.init = true;

            var w0 = StringEditor;
            var w1 = TextAreaEditor;
            var w2 = EnumEditor;
            var w3 = DateEditor;

            initFormType(TaskForm, [
                'Title', w0,
                'Description', w1,
                'Status', w2,
                'Priority', w2,
                'DueDate', w3
            ]);
        }
    }
}

[Status, Priority]; // referenced types