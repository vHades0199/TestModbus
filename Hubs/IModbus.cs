using System;
using System.Threading.Tasks;

namespace ReactNet.Hubs
{
    public interface IModbus
    {
        Task ShowTime(DateTime currentTime);
    }
}
