"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import { Table, TableRow, TableCell } from "@mui/material";
import Link from "next/link";

export default function Details({ params }: { params: { id: String } }) {
    const [img, setImg] = useState<any>();

    useEffect(() => {
        fetch(`/api/get-img/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setImg(data);
                console.log(data);
            })
    }, []);

    return (
        <main className={styles.mainSection}>
            <header style={{margin: "1rem 0 1rem 0"}}>
                <Link href="/">
                    Home
                </Link>
            </header>
            <div>
                <img src={img?.urls.regular} alt="" />
            </div>
            <div>
                <h1>
                    {img?.alt_description}
                </h1>
            </div>
            <div>
                <Table>
                    <TableRow>
                        <TableCell align="center" colSpan={2}>
                            Downloads
                        </TableCell>
                        <TableCell align="center" colSpan={3}>
                            {img?.downloads}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center" colSpan={2}>
                            Likes
                        </TableCell>
                        <TableCell align="center" colSpan={3}>
                            {img?.likes}
                        </TableCell>
                    </TableRow>
                </Table>
            </div>
        </main>
    )
}