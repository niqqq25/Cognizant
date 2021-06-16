using System;
using System.Linq;
using CognizantChallenge.DbContexts;
using CognizantChallenge.Entities;

namespace CognizantChallenge.Repositories
{
    public class TaskRepository : ITaskRepository
    {
        readonly AppDbContext _context;

        public TaskRepository(AppDbContext context)
        {
            _context = context;
        }

        public void AddTask(Task task)
        {
            _context.Tasks.Add(task);
            _context.SaveChanges();
        }
    }
}
