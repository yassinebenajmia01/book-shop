import React, { useState } from 'react';
import BookListt from '../pages/Promotion'; 
import { images } from './Db/pdb'; 

const styles = {
    scrollContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        overflow: 'hidden',
        position: 'relative'
    },
    imageWrapper: {
        minWidth: '100%', 
        transition: 'transform 0.5s ease',
    },
    buttonsContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10px'
    },
    navButton: {
        background: 'rgba(0, 0, 0, 0.5)',
        color: '#fff',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        width: '30px',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 5px',
        fontSize: '16px',
    }
};

function Scroll() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    };

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <div style={styles.scrollContainer}>
            <div
                style={{
                    display: 'flex',
                    transform: `translateX(-${currentIndex * 100}%)`
                }}
            >
                {images.map((image, index) => (
                    <div style={styles.imageWrapper} key={index}>
                        <BookListt
                            url={image.url}
                            originalPrice={image.originalPrice}
                            salePrice={image.salePrice}
                        />
                    </div>
                ))}
            </div>
            <div style={styles.buttonsContainer}>
                <button style={styles.navButton} onClick={prevImage}>⟨</button>
                <button style={styles.navButton} onClick={nextImage}>⟩</button>
            </div>
        </div>
    );
}

export default Scroll;