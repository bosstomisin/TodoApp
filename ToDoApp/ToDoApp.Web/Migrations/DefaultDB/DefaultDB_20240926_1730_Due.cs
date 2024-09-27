using FluentMigrator;

namespace ToDoApp.Migrations.DefaultDB;
[DefaultDB, MigrationKey(20240926_1730)]
public class DefaultDB_20240926_1730_Due : AutoReversingMigration
{
    public override void Up()
    {
        Alter.Table("Task")
            .AddColumn("DueDate").AsDateTime().Nullable();



    }
}