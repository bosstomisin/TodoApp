using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace ToDoApp.TaskDB.Pages;

[PageAuthorize(typeof(TaskRow))]
public class TaskPage : Controller
{
    [Route("TaskDB/Task")]
    public ActionResult Index()
    {
        return this.GridPage("@/TaskDB/Task/TaskPage",
            TaskRow.Fields.PageTitle());
    }
}