using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<ToDoApp.TaskDB.TaskRow>;
using MyRow = ToDoApp.TaskDB.TaskRow;

namespace ToDoApp.TaskDB;

public interface ITaskRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class TaskRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ITaskRetrieveHandler
{
    public TaskRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}