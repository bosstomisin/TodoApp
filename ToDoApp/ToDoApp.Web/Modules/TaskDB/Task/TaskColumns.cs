using Serenity.ComponentModel;
using System.ComponentModel;
using ToDoApp.Modules.TaskDB.Task;

namespace ToDoApp.TaskDB.Columns;


[ColumnsScript("TaskDB.Task")]
[BasedOnRow(typeof(TaskRow), CheckNames = true)]
public class TaskColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int TaskId { get; set; }
    [EditLink]
    public string Title { get; set; }
    public string Description { get; set; }
    [Width(80), AlignCenter]
    public Status Status { get; set; }
    public Priority Priority { get; set; }
    [DisplayName("Date Created")]
    public DateTime? DateCreated { get; set; }

    [DisplayName("Due Date")]
    public DateTime? DueDate { get; set; }


}