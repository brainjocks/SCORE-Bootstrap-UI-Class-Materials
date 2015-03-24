using System.Web.Mvc;

namespace Rename.Me.Web.Areas.RenameMeArea
{
    public class RenameMeAreaAreaRegistration : AreaRegistration
    {
        public override string AreaName
        {
            get
            {
                return "RenameMeArea";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context)
        {
            // Register your MVC routes in here
        }
    }
}
