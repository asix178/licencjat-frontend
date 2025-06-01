import React, { useEffect, useRef } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { useNavigate } from 'react-router-dom';
import Header from "./Header";

const ScanVolunteer = () => {
    const scannerRef = useRef(null);
    const scannerStartedRef = useRef(false);
    const navigate = useNavigate();

    useEffect(() => {
        const config = {
            fps: 10,
            qrbox: 250,
            disableFlip: true,
        };

        const qrCodeSuccessCallback = (decodedText) => {
            if (decodedText) {
                navigate(`/wolontariusz/bilet/id/${decodedText}`);
            }
        };

        const qrCodeErrorCallback = (error) => {
            // Optional: silent fail
        };

        const scannerId = 'qr-reader';
        const scannerElem = document.getElementById(scannerId);

        if (!scannerRef.current && scannerElem && scannerElem.innerHTML === '') {
            const scanner = new Html5Qrcode(scannerId);
            scannerRef.current = scanner;

            Html5Qrcode.getCameras()
                .then((devices) => {
                    if (devices && devices.length > 0) {
                        const cameraId = devices[0].id;
                        scanner
                            .start(cameraId, config, qrCodeSuccessCallback, qrCodeErrorCallback)
                            .then(() => {
                                scannerStartedRef.current = true; // ✅ mark as started
                            })
                            .catch((err) => console.error('Start failed:', err));
                    } else {
                        alert('Brak dostępnych kamer.');
                    }
                })
                .catch((err) => {
                    console.error('Camera init error:', err);
                });
        }

        return () => {
            if (scannerRef.current && scannerStartedRef.current) {
                scannerRef.current
                    .stop()
                    .then(() => {
                        scannerRef.current.clear();
                        const el = document.getElementById(scannerId);
                        if (el) el.innerHTML = '';
                        scannerRef.current = null;
                        scannerStartedRef.current = false;
                    })
                    .catch((err) => {
                        console.error('Stop failed:', err);
                    });
            }
        };
    }, [navigate]);

    return (
        <div><Header header ={"Wolontariusz"} to="/wolontariusz"/>
            <div className="home">
                <h2>Skanuj QR</h2>
                <div
                    id="qr-reader"
                    style={{
                        width: '500px',
                        height: '500px',
                        overflow: 'hidden',
                        position: 'relative',
                        border: '2px solid #ccc',
                        borderRadius: '8px',
                    }}
                />
            </div>
        </div>
    );
};

export default ScanVolunteer;
