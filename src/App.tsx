import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
    const [images, setImages] = useState<FileList | null>(null);
    const [format, setFormat] = useState("jpeg");
    const [status, setStatus] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleConvert = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!images || images.length === 0) {
            setStatus("warning");
            setMessage("Seleciona pelo menos uma imagem.");
            return;
        }

        const formData = new FormData();
        Array.from(images).forEach((file) => {
            formData.append("images", file);
        });
        formData.append("format", format);

        try {
            setLoading(true);
            setStatus("info");
            setMessage("A converter imagens...");

            const endpoint = "https://imgtools-backend.onrender.com/api/convert-image";
            const res = await fetch(endpoint, {
                method: "POST",
                body: formData,
            });

            if (!res.ok) throw new Error("Erro ao converter imagens");

            const blob = await res.blob();
            const url = URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = url;
            link.download = "imagens-convertidas.zip";
            link.click();

            setStatus("success");
            setMessage("Conversão concluída!");
        } catch (err) {
            console.error(err);
            setStatus("danger");
            setMessage("Erro ao converter imagens.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container py-5">
            <h1 className="mb-4">Conversor de Imagens</h1>
            <form onSubmit={handleConvert}>
                <div className="mb-3">
                    <label className="form-label">Seleciona imagens</label>
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        className="form-control"
                        onChange={(e) => setImages(e.target.files)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Formato de destino</label>
                    <select
                        className="form-select"
                        value={format}
                        onChange={(e) => setFormat(e.target.value)}
                    >
                        <option value="jpeg">JPEG</option>
                        <option value="png">PNG</option>
                        <option value="webp">WebP</option>
                        <option value="avif">AVIF</option>
                        <option value="tiff">TIFF</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? "A converter..." : "Converter"}
                </button>
            </form>

            {message && (
                <div className={`alert alert-${status} mt-4`} role="alert">
                    {message}
                </div>
            )}
        </div>
    );
}

export default App;
