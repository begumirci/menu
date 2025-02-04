import { useEffect, useRef } from 'react';
import QRCode from 'qrcode';

export default function QRGenerator() {
  const qrRef = useRef(null);

  useEffect(() => {
    if (qrRef.current) {
      QRCode.toCanvas(qrRef.current, 'https://menu-eight-psi.vercel.app/', {
        width: 200,
      });
    }
  }, []);

  return (
    <div className='qr-container'>
      <h2>QR Kodunu Tara</h2>
      <canvas ref={qrRef}></canvas>
    </div>
  );
}
