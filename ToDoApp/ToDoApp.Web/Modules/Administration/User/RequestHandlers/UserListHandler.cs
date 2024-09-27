using MyRequest = ToDoApp.Administration.UserListRequest;
using MyResponse = Serenity.Services.ListResponse<ToDoApp.Administration.UserRow>;
using MyRow = ToDoApp.Administration.UserRow;

namespace ToDoApp.Administration;
public interface IUserListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class UserListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IUserListHandler
{
    public UserListHandler(IRequestContext context)
         : base(context)
    {
    }
}