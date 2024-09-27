using MyRequest = Serenity.Services.SaveRequest<ToDoApp.Administration.LanguageRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = ToDoApp.Administration.LanguageRow;


namespace ToDoApp.Administration;
public interface ILanguageSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }
public class LanguageSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ILanguageSaveHandler
{
    public LanguageSaveHandler(IRequestContext context)
         : base(context)
    {
    }
}