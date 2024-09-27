
import { TaskColumns, TaskRow, TaskService } from '@/ServerTypes/TaskDB';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { TaskDialog } from './TaskDialog';

@Decorators.registerClass('ToDoApp.TaskDB.TaskGrid')
export class TaskGrid extends EntityGrid<TaskRow> {
    protected getColumnsKey() { return TaskColumns.columnsKey; }
    protected getDialogType() { return TaskDialog; }
    protected getRowDefinition() { return TaskRow; }
    protected getService() { return TaskService.baseUrl; }
}