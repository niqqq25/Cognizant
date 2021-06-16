using System;
using CognizantChallenge.Entities;

namespace CognizantChallenge.Repositories
{
    public interface ITaskRepository
    {
        void AddTask(Task task);
    }
}
