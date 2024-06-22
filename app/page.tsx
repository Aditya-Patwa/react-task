"use client";
import { useState } from "react";
import styles from "@/app/page.module.css";
import { TextField, Pagination } from "@mui/material";
import Images from "@/components/Images";

export default function Home() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const handlePagination = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };


  return (
    <main>
      <header className={styles.header}>
        <TextField id="outlined-basic" label="Search" value={search} onChange={(e) => setSearch(e.target.value)} variant="standard" />
      </header>
      <section className={styles.section}>
        <div>
          <h1>Products</h1>
          <p>Page: {page}</p>
        </div>
          <Images page={page} filter={search} />
      </section>
      <footer className={styles.footer}>
        <Pagination count={5} page={page} onChange={handlePagination} />
      </footer>
    </main>
  );
}
