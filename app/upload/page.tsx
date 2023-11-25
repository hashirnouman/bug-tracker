"use client";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import { sources } from "next/dist/compiled/webpack/webpack";
import { useState } from "react";

interface CloudinaryImage {
  public_id: string;
}
const Upload = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <>
      {publicId && (
        <CldImage src={publicId} width={260} height={190} alt="screen short" />
      )}
      <CldUploadWidget
        options={{ sources: ["local"] }}
        uploadPreset="fo8p02no"
        onUpload={(result, widget) => {
          if (result.event !== "success") return;
          const id = result.info as CloudinaryImage;
          setPublicId(id.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-secondary" onClick={() => open()}>
            upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default Upload;
