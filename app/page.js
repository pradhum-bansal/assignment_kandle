'use client'
import Image from 'next/image'
import styles from './page.module.scss'
import InfoCards from '@/components/games/game-info-cards';
import { Table } from '@/components/table/table';
import {SidebarContext} from './layout'
import { useContext } from 'react';

const chats = [
  {
    key: 1,
  },
  {
    key: 2,
  },
  {
    key: 3,
  },
  {
    key: 4,
  },
  {
    key: 5,
  },
];

export default function Home(props) {
  const  showChat  = useContext(SidebarContext);
  return (
    <div className={styles.main}>
      {console.log(showChat, "SidebarContext")}
      {console.log(props, "---------------->")}
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
            <input placeholder="Feedback makes a better product. Write yours here…" />
            <button className={styles.sign_up_button}>Submit</button>
          </div>
        </div>
      </div>
      {showChat.showChat &&
      <div className={styles.chat_container}>
        <div className={styles.chat_room}>Chat Room</div>
        <div className={styles.divider}></div>
        <div className={styles.navTab}>
          <div className={styles.navTab_item}>
            <Image src="/discussion.svg" width={23} height={23} alt="" />
            Discussion
          </div>
          <div className={styles.navTab_item}>
            <Image src="/live_chat.svg" width={23} height={23} alt="" />
            live winners
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.chats_container}>
          {chats.map((item) => (
            <div key={item.key}>
              <div className={styles.chats}>
                Hi, I am admin of this group. How can I help you?
              </div>
              <div className={styles.sender}>
                <div>
                  <Image src="avatar.svg" width={23} height={23} alt="user" />
                </div>
                <div>Parteek Garg</div>
                <div>08:45 UTC</div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.footer}>
          <div className={styles.input}>Message</div>
          <div className={styles.send_button}>
            <Image src="send_icon.svg" width={16} height={16} alt="user" />
          </div>
        </div>
      </div>
      }
    </div>
  );
}
