using AjaxCRUDProject.Models;
using Microsoft.EntityFrameworkCore;

namespace AjaxCRUDProject.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<Employee> Employees { get; set; } 
    }
}
