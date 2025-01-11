import axios from "axios";
import { X, Upload, FileIcon } from "lucide-react";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";

interface Props {
  apiUrl: string;
  token: string;
  fileName: string | null;
}

export default function ResumeSection({ apiUrl, fileName, token }: Props) {
  const [archivo, setArchivo] = useState<File | null>(null);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [archivoAnterior, setArchivoAnterior] = useState<string | null>(
    fileName || "Por favor suba su CV en formato PDF"
  );

  const onDrop = useCallback((archivosAceptados: File[]) => {
    if (archivosAceptados[0].type === "application/pdf") {
      setArchivo(archivosAceptados[0]);
      setMensaje("");
    } else {
      setMensaje("Por favor, sube solo archivos PDF.");
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
    },
    multiple: false,
  });

  const enviarArchivo = async () => {
    if (!archivo) {
      setMensaje("Por favor, selecciona un archivo PDF primero.");
      return;
    }

    if (archivo.type !== "application/pdf") {
      setMensaje(
        "El archivo seleccionado no es un PDF. Por favor, selecciona un archivo PDF."
      );
      return;
    }

    try {
      setMensaje("Enviando archivo...");
      const formData = new FormData();
      formData.append("file", archivo);
      const response = await axios.post(
        `${apiUrl}/applicant-data/upload-resume`,
        formData,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setMensaje("");
        setArchivo(null);
        setArchivoAnterior(archivo.name);
        setModalAbierto(false);
      } else {
        setMensaje("Hubo un error al subir el archivo.");
      }
    } catch (error) {
      console.log(error);
      setMensaje("Error al conectar con el servidor.");
    }
  };

  return (
    <div>
      <p className="font-bold mb-3">Currículum</p>
      <p className="text-sm text-gray-500 mb-3">{archivoAnterior}</p>
      <Dialog open={modalAbierto} onOpenChange={setModalAbierto}>
        <DialogTrigger asChild>
          <Button id="subir-pdf" variant="outline">
            Subir nuevo PDF
          </Button>
        </DialogTrigger>
        <DialogContent className="w-full">
          <DialogHeader>
            <DialogTitle>Subir archivo PDF</DialogTitle>
          </DialogHeader>
          <div
            {...getRootProps()}
            className={`p-10 border-2 border-dashed rounded-md text-center cursor-pointer ${
              isDragActive ? "border-primary" : "border-gray-300"
            }`}
          >
            <input {...getInputProps()} />
            {archivo ? (
              <div className="flex items-center justify-center space-x-2">
                <FileIcon size={24} />
                <span>{archivo.name}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    setArchivo(null);
                  }}
                >
                  <X size={18} />
                </Button>
              </div>
            ) : isDragActive ? (
              <p>Suelta el archivo aquí...</p>
            ) : (
              <div>
                <Upload className="mx-auto mb-4" />
                <p>
                  Arrastra y suelta un archivo PDF aquí, o haz clic para
                  seleccionar
                </p>
              </div>
            )}
          </div>
          {mensaje && (
            <p className={`mt-2 text-sm "text-gray-400`}>{mensaje}</p>
          )}
          <Button
            onClick={enviarArchivo}
            type="button"
            disabled={!archivo}
            className="mt-4"
          >
            Enviar archivo
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
