
import Image from 'next/image'
import styles from './page.module.scss'
import InfoCards from '@/components/games/game-info-cards';
import { Table } from '@/components/table/table';

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.main_banner}>
        <div className={styles.left_container}>
          <div className={styles.heading}>Play Smarter</div>
          <div className={styles.sign_up_google_cta}>Sign up with Google</div>
          <div className={styles.divider_container}>
            <div className={styles.divider}></div>
            <span>OR</span>
            <div className={styles.divider}></div>
          </div>
          <div className={styles.sign_in_with_google_cta}>
            Sign in with Google
          </div>
        </div>
        <div className={styles.right_container}></div>
      </div>
      <div className={styles.child_component}>
        <div className={styles.component_heading}>Games on Kandle</div>
        <InfoCards />
      </div>
      <div className={styles.child_component}>
        <div className={styles.component_heading}>Games on Kandle</div>
        <Table />
      </div>
      <div className={styles.child_component}>
        <div className={styles.invite_banner}>
          <div className={styles.left_container}>
            <div className={styles.heading}>
              Invite Friends, Win{" "}
              <span className={styles.green_word}>Rewards</span>
            </div>
            <div className={styles.sign_up_button}>Sign Up</div>
          </div>
          <div className={styles.right_container}>
            <Image src="/reward_banner.svg" height={260} width={370} />
          </div>
        </div>
      </div>
      <div className={styles.child_component}>
        <div className={styles.community_banner}>
          <div className={styles.left_container}>
            <div className={styles.heading}>Join Our Vibrant Community</div>
            <div className={styles.image_container}>
              <Image src="/twitter.svg" width={32} height={32} alt="twitter" />
              <Image
                src="/telegram.svg"
                width={32}
                height={32}
                alt="telegram"
              />
            </div>
          </div>
          <div className={styles.middle_container}>
            <div className={styles.divider}></div>
          </div>
          <div className={styles.right_container}>
            <div>
              <input placeholder="Feedback makes a better product. Write yours here…" />
            </div>
            <button className={styles.sign_up_button}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
