import styles from "./documentFile.module.css"
import React, {useState} from 'react';

interface FileProps {
    documentName: string;
    documentTitle: string
}

export default function DocumentFile({documentName, documentTitle}:FileProps) {

    const url = `/documents/${documentName}`;

    const [fileSize, setFileSize] = useState('');

    const checkFileSize = async (url:string) => {
        try {
            const response = await fetch(url, { method: 'HEAD' });
            if (response.ok) {
                const contentLength = response.headers.get('Content-Length');
                if (contentLength != null) {
                    const size: number = Number.parseFloat(contentLength);
                    setFileSize(size ? `${(size / 1024).toFixed(2)} Кб` : 'Размер файла недоступен');
                }
            }
        }
        catch (err) {
            console.error('Error occurred while fetching file size');
        }
    };

    checkFileSize(url).then();

    return (
        <a href={`${url}`} target="_blank" className={`${styles.cDocumentsInner}`}>
            <div className={`${styles.cDocumentsContainer}`}>
                <div className={`${styles.cDocumentsContainerIcon}`}>
                    <svg width="38" height="52" viewBox="0 0 38 52" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M37.7 13.897L24.104.3a1.021 1.021 0 0 0-.723-.3H4.22A4.225 4.225 0 0 0 0 4.22v43.25a4.225 4.225 0 0 0 4.22 4.22h29.56A4.225 4.225 0 0 0 38 47.47V14.62c0-.271-.108-.531-.3-.723zM24.403 3.487l10.11 10.11H26.58a2.18 2.18 0 0 1-2.177-2.176V3.488zM35.957 47.47a2.18 2.18 0 0 1-2.177 2.177H4.22a2.18 2.18 0 0 1-2.177-2.177V4.22c0-1.2.977-2.176 2.177-2.176h18.139v9.378a4.225 4.225 0 0 0 4.22 4.22h9.378V47.47z"
                            fill="var(--theme-main)">
                        </path>
                        <path
                            d="M27.173 25.947H10.828a1.022 1.022 0 0 0 0 2.043h16.345a1.021 1.021 0 1 0 0-2.043zm0 4.563H10.828a1.022 1.022 0 0 0 0 2.043h16.345a1.022 1.022 0 0 0 0-2.043zm0 4.562H10.828a1.022 1.022 0 0 0 0 2.043h16.345a1.021 1.021 0 1 0 0-2.043zm-5.313 4.563H10.829a1.022 1.022 0 0 0 0 2.043h11.033a1.021 1.021 0 1 0 0-2.043z"
                            fill="var(--theme-main)">
                        </path>
                    </svg>
                </div>
                <div className={`${styles.cDocumentsContent}`}>
                    <div className={`${styles.cDocumentsContentText}`}>
                        <span>
                            {documentTitle}
                        </span>
                    </div>
                    <div className={`${styles.cDocumentsDownload}`}>
                        <span className={`${styles.cDocumentsDownloadFormat}`}>.pdf, {fileSize}</span>
                        <div className={`${styles.cDocumentsDownloadCircle}`}>
                            <svg viewBox="0 0 10 16" width="10" height="12" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.533 15.047l4.215-4.215a.746.746 0 0 0 0-1.058.746.746 0 0 0-1.059 0L5.753 12.71V1.485a.752.752 0 1 0-1.505 0v11.22L1.312 9.767a.746.746 0 0 0-1.059 0 .746.746 0 0 0 0 1.058l4.215 4.215c.147.147.337.22.533.22a.74.74 0 0 0 .532-.214z"
                                    fill="rgba(var(--theme-accent-rgb), .6)">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
}