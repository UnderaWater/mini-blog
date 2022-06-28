import React from 'react';
import Link from 'next/link';
import styles from '../styles/BlogCard.module.css';

const BlogCard = ({ title, author, coverPhoto, datePublished, slug }) => {
    console.log(coverPhoto)

    return (
        <div className={styles.card}>
            <Link href={'/posts/' + slug}>
                <div className={styles.imgContainer}>
                    <img src={coverPhoto} alt="photo title" />
                </div>
            </Link>
            <h2>{title}</h2>
        </div>
    )
};

export default BlogCard;