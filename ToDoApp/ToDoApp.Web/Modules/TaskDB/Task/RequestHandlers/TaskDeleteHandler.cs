using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = ToDoApp.TaskDB.TaskRow;

namespace ToDoApp.TaskDB;

public interface ITaskDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }

public class TaskDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ITaskDeleteHandler
{
    public TaskDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}