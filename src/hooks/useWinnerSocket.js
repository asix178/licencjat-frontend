import { useEffect } from 'react';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

export const useWinnerSocket = (userUuid, onWinCallback) => {
    useEffect(() => {
        // const path = window.location.pathname;
        // if (!path.startsWith('/uzytkownik')) return;

        const socket = new SockJS('http://localhost:8080/ws');
        const stompClient = new Client({
            webSocketFactory: () => socket,
            reconnectDelay: 5000,
            debug: str => console.log('[STOMP]', str),
        });

        stompClient.onConnect = () => {
            stompClient.subscribe('/topic/winner', message => {
                const payload = JSON.parse(message.body);
                console.log(payload);
                console.log(userUuid)
                if (payload.userId === userUuid) {
                    onWinCallback(payload);
                }
            });
        };

        stompClient.activate();

        return () => {
            stompClient.deactivate();
        };
    }, [userUuid, onWinCallback]);
};
