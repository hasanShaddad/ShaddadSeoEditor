using ErtiqaaContent.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ErtiqaaContent.Controllers
{
    public class AdminController : Controller
    {
        // GET: Admin
        AdminDB _db = new AdminDB();
        public ActionResult Index()
        {
            var model = _db.Contents.ToList();
            return View(model);
        }
        public ActionResult Create()
        {
            var model = _db.Sections.ToList();
            return View(model);
        }
        protected override void Dispose(bool disposing)
        {
            if (_db != null)
            {
                _db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}