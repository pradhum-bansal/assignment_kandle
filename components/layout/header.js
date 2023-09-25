import Image from 'next/image';
import styles from './header.module.scss';

export default function Header({open, setShowChat, showChat}){

    return (
      <div
        className={
          open ? styles.header_container : styles.header_container_full
        }
      >
        <div>
          <Image src="/logo.svg" width={90} height={24} alt="logo" />
        </div>
        <div className={styles.right_container}>
          <div className={styles.sign_in_button}>
            <span>Sign in</span>
          </div>
          <div className={styles.sign_up_button}>
            <span>Sign up</span>
          </div>
          <div className={styles.sign_in_button}>
            <Image
              src="/chat_icon.svg"
              width={24}
              height={24}
              alt="chat"
              onClick={() => setShowChat(!showChat)}
            />
            <Image src="/globe.svg" width={24} height={24} alt="globe" className={styles.globe} />
            <span className={styles.divider}></span>
            <span className={styles.language}>Eng</span>
          </div>
        </div>
      </div>
    );
}