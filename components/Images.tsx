"use client";
import {useState, useEffect, useContext} from "react";
import { ImageContext } from "./ImageProvider";
import styles from './page.module.css';
import Link from "next/link";

export default function Images({ page, filter }: {page: number, filter: String}) {
    const images = useContext(ImageContext);
    const [pageImg, setPageImg] = useState<any[]>([]);

    useEffect(() => {
        const pageImags = images.slice(6*(page-1), 6*(page-1)+6);
        console.log(pageImags);
        setPageImg([...pageImags]);
    }, [images, page]);


    useEffect(() => {
        const filteredImg = images.filter(img => img.alt_description.toLowerCase().includes(filter.toLowerCase())).slice(6*(page-1), 6*(page-1)+6);

        setPageImg([...filteredImg]);
    }, [filter, page]);

    return (
        <div className={styles.imagesDiv}>
            {pageImg.map((img, i) => {
                return (
                    <Link href={"/details/"+img.id} key={i}>
                        <div className={styles.imageDiv}>
                        <div>
                            <img src={img.urls.regular} alt="" />
                        </div>
                        <div>
                            <h1>
                                {img.alt_description}
                            </h1>
                        </div>
                    </div>
                    </Link>
                )
            })}
        </div>
    )
}