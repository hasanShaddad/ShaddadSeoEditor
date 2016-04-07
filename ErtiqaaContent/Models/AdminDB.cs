using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ErtiqaaContent.Models
{
    public class AdminDB : DbContext
    {
        public AdminDB() : base("name=ErtiqaaConnection")
        {

        }
        public DbSet<Section> Sections{get;set;}
        public DbSet<Content> Contents { get;set;}
    }
}