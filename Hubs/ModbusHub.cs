using Microsoft.AspNetCore.SignalR;
using System;
using System.Threading.Tasks;

namespace ReactNet.Hubs
{
    public class ModbusHub : Hub
    {
        public async Task SendTimeToClients(DateTime dateTime)
        {
            await Clients.All.SendAsync("ReceiveMessage", dateTime);
        }
    }
}
