using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ErtiqaaContent.Models
{
    public class Content
    {
        public int id { get; set; }
        public string ArticleHeader { get; set; }
        public string ArticleSubHeader { get; set; }
        [AllowHtml]
        public string ArticleMainText { get; set; }
        public string ArticleSubText { get; set; }
        public string ArticleImage { get; set; }
        public string ArticleSubImage { get; set; }
        public string ButtonText { get; set; }
        public int SectionId { get; set; }
    }
}