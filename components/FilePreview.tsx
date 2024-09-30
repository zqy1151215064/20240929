"use client";

import React, {useState} from "react";
import {useUploadPreviewContext} from "@/components/UploadPreviewProvider";
import {pdfjs, Document, Page} from 'react-pdf';
import {Icon} from "@iconify/react";
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();
// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const options = {
    cMapUrl: '/cmaps/',
    standardFontDataUrl: '/standard_fonts/',
};

const FilePreview = () => {
    const [numPages, setNumPages] = useState<number | null>(null)
    const [rotations, setRotations] = useState<number[]>([]);
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const {pdfFile} = useUploadPreviewContext()
    if (!pdfFile) return null;

    const onDocumentLoadSuccess = ({numPages}: { numPages: number }) => {
        setNumPages(numPages);
        setRotations(Array(numPages).fill(0))
    };

    const rotatePage = (pageIndex: number) => {
        const newRotations = [...rotations];
        newRotations[pageIndex] = (newRotations[pageIndex] + 90) % 360;
        setRotations(newRotations);
    }

    return (
        <>
            <div className="flex justify-center items-center space-x-3 selecto-ignore">
                <button className="btn !w-auto">Rotate all</button>
                <button className="btn !w-auto !bg-gray-800" aria-label="Remove this PDF and select a new one"
                        data-microtip-position="top" role="tooltip">
                    Remove PDF
                </button>
                <button
                    className="shadow rounded-full p-2 flex items-center justify-center hover:scale-105 grow-0 shrink-0 disabled:opacity-50 !bg-white"
                    aria-label="Zoom in" data-microtip-position="top" role="tooltip">
                    <Icon icon="prime:search-plus" width="20" height="20" style={{color: 'black'}}> </Icon>
                </button>
                <button
                    className="shadow rounded-full p-2 flex items-center justify-center hover:scale-105 grow-0 shrink-0 disabled:opacity-50 !bg-white"
                    aria-label="Zoom in" data-microtip-position="top" role="tooltip">
                    <Icon icon="prime:search-minus" width="20" height="20" style={{color: 'black'}}> </Icon>
                </button>
            </div>
            <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess} options={options}>
                <div className="flex flex-wrap justify-center">
                    {Array.from(new Array(numPages), (el, index) => (
                            <div key={`page_${index + 1}`} className="m-3" style={{maxWidth: '200px', flex: '0 0 200px',}}>
                                <div className="relative cursor-pointer" onClick={() => rotatePage(index)}>
                                    <div
                                        className="absolute z-10 top-1 right-1 rounded-full p-1 hover:scale-105 hover:fill-white bg-[#ff612f] fill-white"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            rotatePage(index)
                                        }}>
                                        <Icon icon="solar:refresh-bold" width="12" height="12"
                                              style={{color: 'white'}}></Icon>
                                    </div>
                                    <div className="overflow-hidden transition-transform">
                                        <div
                                            className="relative h-full w-full flex flex-col justify-between items-center shadow-md p-3 bg-white hover:bg-gray-50">
                                            <div className="pointer-events-none w-full shrink">
                                                <Page canvasRef={canvasRef} pageNumber={index + 1} width={176} height={289}
                                                      rotate={rotations[index]}/>
                                            </div>
                                            <div
                                                className="w-[90%] text-center shrink-0 text-xs italic overflow-hidden text-ellipsis whitespace-nowrap">{index + 1}</div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        )
                    )}
                </div>
            </Document>
        </>
    )
}

export default FilePreview
