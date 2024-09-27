using FluentMigrator;

namespace ToDoApp.Migrations.DefaultDB;
[DefaultDB, MigrationKey(20240926_1725)]
public class DefaultDB_20240926_1725_TaskUp : AutoReversingMigration
{
    public override void Up()
    {
        Create.Table("Task")
            .WithColumn("TaskId").AsInt32().Identity().PrimaryKey().NotNullable()
            .WithColumn("Title").AsString(100).NotNullable()
            .WithColumn("Description").AsString(500).Nullable()
            .WithColumn("Status").AsInt32().WithDefaultValue(1)
            .WithColumn("Priority").AsInt32().WithDefaultValue(1)
            .WithColumn("DateCreated").AsDateTime()
            .WithColumn("DateUpdated").AsDateTime().Nullable();



    }
}