import { useState } from "react";
import { PaperClipIcon } from "@heroicons/react/24/outline";

const API_URL = import.meta.env.VITE_DEV_API_URL + "/v1/upload";

export default function FileUploader({ onUploaded }) {
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e) => {
    const files = e.target.files;
    if (!files.length) return;

    setUploading(true);
    try {
      const formData = new FormData();
      // Thêm nhiều file vào FormData với key là 'files'
      for (let i = 0; i < files.length; i++) {
        formData.append("files", files[i], files[i].name);
      }

      const res = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed");

      const data = await res.json();
      // data.added_files là mảng tên file được backend chấp nhận
      onUploaded?.(data);
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <label className="cursor-pointer flex items-center">
      <PaperClipIcon className="h-6 w-6 text-gray-500 hover:text-blue-600" />
      <input
        type="file"
        className="hidden"
        multiple
        onChange={handleFileChange}
        disabled={uploading}
      />
    </label>
  );
}
