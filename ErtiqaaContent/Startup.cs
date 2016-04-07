using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ErtiqaaContent.Startup))]
namespace ErtiqaaContent
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
