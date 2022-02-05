using Microsoft.EntityFrameworkCore;
using WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Data
{
    public class ApiDbContext : DbContext
    {
#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
        public ApiDbContext(DbContextOptions<ApiDbContext> options) : base(options)
#pragma warning restore CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
        {

        }
        public DbSet<Comment> Comments { get; set; }
        /*public DbSet<Artist> Artists { get; set; }
        public DbSet<Album> Albums { get; set; }*/

        // Seed script
        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<Song>().HasData(
        //        new Song
        //        {
        //            Id = 1,
        //            Title = "Willow",
        //            Language = "Spanish",
        //            Duration = "4.35"
        //        },
        //         new Song
        //         {
        //             Id = 2,
        //             Title = "Despacito",
        //             Language = "Spanish",
        //             Duration = "3.35"
        //         }
        //        );
        //}
    }
}
