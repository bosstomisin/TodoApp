using Serenity.Navigation;
using MyPages = ToDoApp.TaskDB.Pages;
[assembly: NavigationMenu(int.MaxValue, "To do List", icon: "fa-tasks")]
[assembly: NavigationLink(int.MaxValue, "To do List/Tasks", typeof(MyPages.TaskPage), icon: "fa-list")]