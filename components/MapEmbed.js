import styles from './MapEmbed.module.css';

export default function MapEmbed() {
    return (
        <div className={styles.mapouter}>
            <div className={styles.gmap_canvas}>
                <iframe
                    src="https://www.google.com/maps/embed/v1/place?q=46.56739867574206%2C%2022.08399725935071&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
}
