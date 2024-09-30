"use client";

import React from "react";
import UploadPreviewProvider from "@/app/components/UploadPreviewProvider";
import FileUploader from "@/app/components/FileUploader";
import FilePreview from "@/app/components/FilePreview";
import {pdfjs} from "react-pdf";
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

export default function Home() {


    return (
        <div className="bg-[#f7f5ee] text-black">
            <main className="container mx-auto py-20 space-y-5">
                <div className="flex flex-col text-center !mb-10 space-y-5">
                    <h1 className="text-5xl font-serif">Rotate PDF Pages</h1>
                    <p className="mt-2 text-gray-600 max-w-lg mx-auto">
                        Simply click on a page to rotate it. You can then download your modified PDF.
                    </p>
                </div>

                    <UploadPreviewProvider>
                        <FileUploader/>
                        <FilePreview/>
                    </UploadPreviewProvider>

            </main>
        </div>
    );
}
