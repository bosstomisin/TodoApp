using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;
using System.Threading.Tasks;
using ToDoApp.Modules.TaskDB.Task;

namespace ToDoApp.TaskDB;

[ConnectionKey("Default"), Module("TaskDB"), TableName("Task")]
[DisplayName("Tasks"), InstanceName("Task")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class TaskRow : Row<TaskRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Task Id"), Identity, IdProperty]
    public int? TaskId { get => fields.TaskId[this]; set => fields.TaskId[this] = value; }

    [DisplayName("Title"), Size(100), NotNull, QuickSearch, NameProperty]
    public string Title { get => fields.Title[this]; set => fields.Title[this] = value; }

    [DisplayName("Description"), Size(500)]
    public string Description { get => fields.Description[this]; set => fields.Description[this] = value; }

    [DisplayName("Status"), NotNull]
    public Status? Status { get => fields.Status[this]; set => fields.Status[this] = value; }

    public DateTime? DateCreated { get => fields.DateCreated[this]; set => fields.DateCreated[this] = value; }
    public DateTime? DateUpdated { get => fields.DateUpdated[this]; set => fields.DateUpdated[this] = value; }
    public DateTime? DueDate { get => fields.DueDate[this]; set => fields.DueDate[this] = value; }

    [DisplayName("Priority"), NotNull]
    public Priority? Priority { get => fields.Priority[this]; set => fields.Priority[this] = value; }
    public class RowFields : RowFieldsBase
    {
        public Int32Field TaskId;
        public StringField Title;
        public StringField Description;
        public EnumField<Status> Status;
        public DateTimeField DateCreated;
        public DateTimeField DateUpdated;
        public DateTimeField DueDate;
        public EnumField<Priority> Priority;

    }
}