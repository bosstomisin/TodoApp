using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<ToDoApp.Administration.LanguageRow>;
using MyRow = ToDoApp.Administration.LanguageRow;


namespace ToDoApp.Administration;
public interface ILanguageListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class LanguageListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ILanguageListHandler
{
    public LanguageListHandler(IRequestContext context)
         : base(context)
    {
    }
}