'use client';

import { useRef, useState } from 'react';

export default function Home() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewSrc(url);
    }
  };

  return (
    <main
      style={{
        backgroundColor: '#000',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      {/* Logo */}
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <img src="/logow.png" alt="Logo" style={{ width: '100px' }} />
      </div>

      {/* Konten utama */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <div
          style={{
            backgroundColor: '#1a1a1a',
            padding: '2rem',
            borderRadius: '1rem',
            boxShadow: '0 0 20px rgba(255,255,255,0.1)',
            width: '100%',
            maxWidth: '400px',
            textAlign: 'center',
          }}
        >
          <h1 style={{ color: '#ffffff', marginBottom: '1rem' }}>
            Upscale Image
          </h1>

          {/* Upload button */}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />

          <button
            onClick={handleFileClick}
            style={{
              marginBottom: '1rem',
              padding: '0.75rem 1rem',
              backgroundColor: '#000',
              color: '#fff',
              border: 'none',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              width: '100%',
            }}
          >
            Upload Image Here
          </button>

          {/* Gambar preview */}
          {previewSrc && (
            <div style={{ marginBottom: '1rem' }}>
              <img
                src={previewSrc}
                alt="Preview"
                style={{
                  maxWidth: '100%',
                  borderRadius: '0.5rem',
                  border: '1px solid #444',
                }}
              />
            </div>
          )}

          {/* Tombol lanjut */}
          <button
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#444',
              color: '#fff',
              border: 'none',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              width: '100%',
            }}
          >
            Upscale Now
          </button>
        </div>
      </div>
    </main>
  );
}
