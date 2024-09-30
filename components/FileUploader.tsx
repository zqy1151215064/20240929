import {useUploadPreviewContext} from "@/components/UploadPreviewProvider";
import {Icon} from "@iconify/react";
import React from "react";

const FileUploader = () => {
    const {loading, setLoading, pdfFile, setPdfFile} = useUploadPreviewContext()

    if (loading || pdfFile) return null

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadstart = () => {
                setLoading(true);
            };
            reader.onload = (e) => {
                setLoading(false)
                if (e.target?.result) {
                    setPdfFile(e.target.result as ArrayBuffer);
                }
            }
            reader.onerror = () => {
                setLoading(false);
                console.error("Error reading file");
            };
            reader.readAsArrayBuffer(file);
        }
    }


    return <div className="w-full flex justify-center">
        {
            loading ? (<Icon icon="eos-icons:loading" width="14" height="14" style={{color: '#000000'}}></Icon>) : (
                <div className="h-[350px] relative text-center w-[275px]">
                    <input className="cursor-pointer hidden" type="file" id="input-file-upload" accept=".pdf"
                           onChange={handleFileUpload}/>
                    <label
                        className="h-full flex items-center justify-center border rounded transition-all bg-white border-dashed border-stone-300"
                        htmlFor="input-file-upload">
                        <div className="cursor-pointer flex flex-col items-center space-y-3">
                            <Icon icon="mdi-light:cloud-upload" width="24" height="24"
                                  style={{color: '#000000'}}></Icon>
                            <p className="pointer-events-none font-medium text-sm leading-6 pointer opacity-75">
                                Click to upload or drag and drop
                            </p>
                        </div>
                    </label>
                </div>
            )
        }
    </div>
}

export default FileUploader
