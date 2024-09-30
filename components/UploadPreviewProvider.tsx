import {createContext, PropsWithChildren, useContext, useMemo, useState} from "react";


interface UploadPreviewContextType {
    loading: boolean;
    setLoading: (loading: boolean) => void;
    pdfFile: ArrayBuffer | null,
    setPdfFile: (pdfFile: ArrayBuffer | null) => void;
}

const UploadPreviewContext = createContext<UploadPreviewContextType>({
    loading: false,
    setLoading: () => {
    },
    pdfFile: null,
    setPdfFile: () => {
    }
})

export const useUploadPreviewContext = () => {
    const context = useContext(UploadPreviewContext);
    if (!context) {
        throw new Error('useUploadPreviewContext must be used within an UploadPreviewProvider');
    }
    return context;
}

const UploadPreviewProvider = ({children}: PropsWithChildren) => {

    const [loading, setLoading] = useState(false)
    const [pdfFile, setPdfFile] = useState<ArrayBuffer | null>(null);

    const value: UploadPreviewContextType = useMemo(
        () => ({
            loading, setLoading, pdfFile, setPdfFile
        }),
        [loading, pdfFile]
    )

    return <UploadPreviewContext.Provider value={value}>{children}</UploadPreviewContext.Provider>

}

export default UploadPreviewProvider
