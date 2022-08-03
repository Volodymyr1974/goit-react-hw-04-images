import { Grid } from 'react-loader-spinner';
import styles from './Loader.module.css';

export default function Loader() {
    return (
        <div className={styles.loader}>
            <Grid color="#00BFFF" height={80} width={80} ariaLabel="loading" />
        </div>
    );
}
