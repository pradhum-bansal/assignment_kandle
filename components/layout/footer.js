import Image from 'next/image';
import styles from './footer.module.scss';

const coins = [
  { image: "/footer_icons/icon2.svg" },
  { image: "/footer_icons/icon2.svg" },
  { image: "/footer_icons/icon2.svg" },
  { image: "/footer_icons/icon2.svg" },
  { image: "/footer_icons/icon2.svg" },
  { image: "/footer_icons/icon2.svg" },
  { image: "/footer_icons/icon2.svg" },
  { image: "/footer_icons/icon2.svg" },
  { image: "/footer_icons/icon2.svg" },
  { image: "/footer_icons/icon2.svg" },
  { image: "/footer_icons/icon2.svg" },
  { image: "/footer_icons/icon2.svg" },
  { image: "/footer_icons/icon2.svg" },
  { image: "/footer_icons/icon2.svg" },
  { image: "/footer_icons/icon2.svg" },
  { image: "/footer_icons/icon2.svg" },
  { image: "/footer_icons/icon2.svg" },
];
const company = [
  {
    image: "/footer_icons/icon3.svg",
  },
  {
    image: "/footer_icons/icon3.svg",
  },
  {
    image: "/footer_icons/icon3.svg",
  },
  {
    image: "/footer_icons/icon3.svg",
  },
  {
    image: "/footer_icons/icon3.svg",
  },
];
export const Footer = () => {
    return (
      <div className={styles.footer_container}>
        <div className={styles.top_container}>
          <div className={styles.listing}>
            <div className={styles.heading}>Games</div>
            <ul>
              <li>Portfolio League</li>
              <li>Mega League</li>
              <li>Portfolio League</li>
              <li>Mega League</li>
            </ul>
          </div>
          <div className={styles.listing}>
            <div className={styles.heading}>Support/Legal</div>
            <ul>
              <li>Help Center</li>
              <li>Help Center</li>
              <li>Help Center</li>
              <li>Help Center</li>
              <li>Help Center</li>
              <li>Mega League</li>
            </ul>
          </div>
          <div className={styles.listing}>
            <div className={styles.heading}>About us</div>
            <ul>
              <li>News</li>
              <li>Help Center</li>
              <li>Help Center</li>
              <li>Mega League</li>
            </ul>
          </div>
          <div className={styles.listing}>
            <div className={styles.heading}>About us</div>
            <ul>
              <li>News</li>
              <li>Help Desk</li>
              <li>Help Center</li>
              <li>Help Center</li>
              <li>Mega League</li>
            </ul>
          </div>
          <div className={styles.listing}>
            <div className={styles.heading}>About us</div>
            <ul>
              <li>News</li>
              <li>Help Desk</li>
              <li>Mega League</li>
            </ul>
          </div>
          <div className={styles.listing}>
            <div className={styles.heading}>Join our Community</div>
              <div className={styles.community}>
                <div>
                  <Image src='footer_icons/community/twitter.svg' width={24} height={24}/>
                </div>
                 <div> <Image src='footer_icons/community/telegram.svg' width={24} height={24}/></div>
                  <div> <Image src='footer_icons/community/discord.svg' width={24} height={24}/></div>
                   <div> <Image src='footer_icons/community/globe.svg' width={24} height={24}/></div>
              </div>

          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.middle_container}>
          <div className={styles.heading}>Supported Assets</div>
          <div className={styles.coins_container}>
            {coins.map((item, index) => (
              <Image
                src={item.image}
                width={32}
                height={32}
                alt="logo"
                key={index}
              />
            ))}
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.middle_container}>
          <div className={styles.heading}>Investors and Partners</div>
          <div className={styles.coins_container}>
            {company.map((item, index) => (
              <Image
                src={item.image}
                width={115}
                height={32}
                alt="logo"
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    );
}