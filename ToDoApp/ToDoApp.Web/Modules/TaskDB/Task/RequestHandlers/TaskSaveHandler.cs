using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<ToDoApp.TaskDB.TaskRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = ToDoApp.TaskDB.TaskRow;

namespace ToDoApp.TaskDB;

public interface ITaskSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class TaskSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ITaskSaveHandler
{
    public TaskSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}