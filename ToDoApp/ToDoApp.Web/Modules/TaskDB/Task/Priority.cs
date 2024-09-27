namespace ToDoApp.Modules.TaskDB.Task;
[EnumKey("TaskDB.Priority")]

public enum Priority
{
    [Description("Low")]

    Low = 1,
    [Description("Medium")]

    Medium,
    [Description("High")]

    High
}
