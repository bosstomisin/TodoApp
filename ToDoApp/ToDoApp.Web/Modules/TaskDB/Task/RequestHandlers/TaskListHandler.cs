using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<ToDoApp.TaskDB.TaskRow>;
using MyRow = ToDoApp.TaskDB.TaskRow;

namespace ToDoApp.TaskDB;

public interface ITaskListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class TaskListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ITaskListHandler
{
    public TaskListHandler(IRequestContext context)
            : base(context)
    {
    }
}