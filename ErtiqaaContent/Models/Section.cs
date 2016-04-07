using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ErtiqaaContent.Models
{
    public class Section
    {
       public int id { get; set; }
        public string SectionHeader { get; set; }
        public string SectionSubHeader { get; set; }
        public string SectionMainText { get; set; }
        public string  SectionSubText { get; set; }
        public string SectionImage { get; set; }
        public string SectionSubImage { get; set; }
        public string ButtonText { get; set; }

        public ICollection<Content> contents{get;set;}

    }
}