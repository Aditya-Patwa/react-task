"use client";
import { createContext, useState, useEffect } from "react";

export const ImageContext = createContext<any[]>([]);

export default function ImageProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [images, setImages] = useState<any[]>([]);

    useEffect(() => {
        fetch("/api/fetch-img")
            .then(res => res.json())
            .then(data => {
                setImages(data);
            });
    }, []);

    return (
        <ImageContext.Provider value={images}>
            {children}
        </ImageContext.Provider>
    )
}