import { HubConnectionBuilder, LogLevel } from "@aspnet/signalr";
import { useEffect, useState } from "react";
import { Button } from "reactstrap";

export default function SignalR() {
    const [hub] = useState(new HubConnectionBuilder()
        .withUrl('/hubs/modbus')
        .configureLogging(LogLevel.Information)
        .build());
    const [msg, setMsg] = useState([]);

    useEffect(() => {
        hub.start()
            .then(() => console.log('Connection started!'))
            .catch(err => console.error('Error while establishing connection :(', err));
        hub.on('ReceiveMessage', (data) => {
            setMsg(val => [data, ...val])
        });
        return () => {
            hub.off('ReceiveMessage');
            hub.stop();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <>
        <Button color="primary" onClick={() => {
            hub.invoke("SendTimeToClients", new Date()).catch(function (err) {
                return console.error(err.toString());
            });
        }}>
            Send
        </Button>
        <pre>
            {JSON.stringify(msg, null, 2)}
        </pre></>;
}
