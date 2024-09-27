import { TaskForm, TaskRow, TaskService } from '@/ServerTypes/TaskDB';
import { Decorators, EntityDialog } from '@serenity-is/corelib';

@Decorators.registerClass('ToDoApp.TaskDB.TaskDialog')
export class TaskDialog extends EntityDialog<TaskRow, any> {
    protected getFormKey() { return TaskForm.formKey; }
    protected getRowDefinition() { return TaskRow; }
    protected getService() { return TaskService.baseUrl; }

    protected form = new TaskForm(this.idPrefix);
}