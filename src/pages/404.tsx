import Link from 'next/link';
import RootLayout from '../components/RootLayout.tsx';
import MainLayout from '../components/MainLayout.tsx';
import styles from '../styles/404.module.css';

export default function Custom404() {
  return (
    <RootLayout>
      <MainLayout>
        <div className={styles.box}>
          <h1 className={styles.title}>404 - Page Not Found</h1>
          <div>The page you&lsquo;re looking for might have been moved or doesn&lsquo;t exist.</div>
          <div>
            <Link className={styles.button} href="/">
              Back to home page
            </Link>
          </div>
        </div>
      </MainLayout>
    </RootLayout>
  );
}
