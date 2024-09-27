namespace ToDoApp.Modules.TaskDB.Task;
[EnumKey("TaskDB.Status")]
public enum Status
{
    [Description("Pending")]
    Pending = 1,
    [Description("In Progress")]
    In_Progress,
    [Description("Completed")]
    Completed
}
