using Serenity.ComponentModel;
using ToDoApp.Modules.TaskDB.Task;

namespace ToDoApp.TaskDB.Forms;

[FormScript("TaskDB.Task")]
[BasedOnRow(typeof(TaskRow), CheckNames = true)]
public class TaskForm
{
    public string Title { get; set; }
    [TextAreaEditor(Rows = 3)]
    public string Description { get; set; }
    public Status Status { get; set; }
    public Priority Priority { get; set; }
    public DateTime DueDate { get; set; }
}