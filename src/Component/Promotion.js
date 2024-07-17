import React from 'react';

const calculateDiscountPercentage = (originalPrice, salePrice) => {
    const discount = originalPrice - salePrice;
    const discountPercentage = Math.round((discount / originalPrice) * 100);
    return discountPercentage;
};

const styles = {
    galleryContainer: {
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    imageContainer: {
        position: 'relative',
        maxWidth: '400px', 
        margin: '0 auto', 
    },
    image: {
        width: '100%',
        height: 'auto',
        marginBottom: '10px',
        display: 'block'
    },
    priceTag: {
        position: 'absolute',
        bottom: '10px', 
        right: '10px', 
        background: '#FFD700', 
        color: '#000', 
        padding: '5px',
        borderRadius: '5px',
        fontWeight: 'bold',
        fontSize: '14px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    originalPrice: {
        textDecoration: 'line-through',
        marginRight: '5px'
    },
    salePrice: {
        color: 'red',
        fontWeight: 'bold'
    },
    discountCircle: {
        background: 'red',
        color: '#fff',
        borderRadius: '50%',
        width: '20px',
        height: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '12px',
        position: 'absolute',
        top: '-10px', 
        right: '-10px', 
    }
};

const BookListt = ({ url, originalPrice, salePrice }) => {
    const discountPercentage = calculateDiscountPercentage(originalPrice, salePrice);

    return (
        <div style={styles.galleryContainer} className='mt-7'>
            <div style={styles.imageContainer}>
                <img src={url} alt={`erreur`} style={styles.image} />
                <div style={styles.priceTag}>
                    <span style={styles.originalPrice}>{originalPrice}$</span>
                    <span style={styles.salePrice}>{salePrice}$</span>
                    <div style={styles.discountCircle}>
                        {discountPercentage}%
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookListt;
