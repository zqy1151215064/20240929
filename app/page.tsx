"use client";

import React from "react";
import UploadPreviewProvider from "@/components/UploadPreviewProvider";
import FileUploader from "@/components/FileUploader";
import FilePreview from "@/components/FilePreview";


if (typeof Promise.withResolvers === "undefined") {
    if (typeof window !== 'undefined') {
        // @ts-expect-error This does not exist outside of polyfill which this is doing
        window.Promise.withResolvers = function () {
            let resolve, reject
            const promise = new Promise((res, rej) => {
                resolve = res
                reject = rej
            })
            return {promise, resolve, reject}
        }
    } else {
        // @ts-expect-error This does not exist outside of polyfill which this is doing
        global.Promise.withResolvers = function () {
            let resolve, reject
            const promise = new Promise((res, rej) => {
                resolve = res
                reject = rej
            })
            return {promise, resolve, reject}
        }
    }
}


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
