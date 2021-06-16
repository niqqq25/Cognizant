using System;
using CognizantChallenge.Entities;
using Microsoft.EntityFrameworkCore;

namespace CognizantChallenge.DbContexts
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        { }

        public DbSet<Task> Tasks { get; set; }
    }
}
