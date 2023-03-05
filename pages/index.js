import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { db } from '../firebase'
import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    (async () => {
      const articles = [];
      const querySnapshot = await getDocs(collection(db, 'articles'));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        articles.push({
          id: doc.id,
          title: doc.data().title,
          description: doc.data().description
        });
        setArticles(articles);
      });
    })();
  }, []);
  // データベースからのデータが入る
  console.log(articles);
  return (
    <>
      <Head>
        <title>Udon-japanese の日記帳</title>
        <meta name="description" content="Udon-japanese の日記" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>
          Udon-japanese の日記帳
        </h1>
        <div className={styles.grid}>
          {articles.map((article)=> {
              return (
                <a key={article.id} href={`/article?id=${article.id}`} className={styles.card}>
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                </a>
              )
            })}
        </div>
      </main>
    </>
  )
}
