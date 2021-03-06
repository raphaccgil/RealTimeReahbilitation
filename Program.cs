using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;

namespace WebAPP_Reahb_Server
{
    public class Program
    {
        public static void Main(string[] args)
        {

            BuildWebHost(args).Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .Build();
    }
}