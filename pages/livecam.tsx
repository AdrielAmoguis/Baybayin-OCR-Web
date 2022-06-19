import type { NextPage } from "next";
import Head from "next/head";
import WebCam from "react-webcam";
import styles from "../styles/Home.module.css";

const LiveCamera: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Baybayin OCR</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Baybayin Optical Character Recognition: Webcam</h1>

                <p className={styles.description}>
                    An Optical Character Recognition (OCR) system for Baybayin. Trained using the
                    <code className={styles.code}>YOLOv5 Medium</code> model.
                </p>

                <WebCam
                    videoConstraints={{
                        width: 640,
                        height: 640,
                        facingMode: "user",
                    }}
                />
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    A project by AMOGUIS, FLORES, MADRID
                    {/* <span className={styles.logo}>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span> */}
                </a>
            </footer>
        </div>
    );
};

export default LiveCamera;
