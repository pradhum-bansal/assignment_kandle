import Image from 'next/image';
import './cards.module.scss';
import styles from './cards.module.scss';
const CARDS = [
  {
    image: "/card_image.svg",
    bannerTitle: "COIN MEGA LEAGUE",
    description:
      "Portfolio Leagues are where skill and strategy come together in an exhilarating crypto fantasy gameplay. Dive into an exciting adventure and make big returns, every 2 minutes!",
    heading: "Coin Mega League",
    ctaTitle: "Play Portfolio League ",
  },
  {
    image: "/card_image.svg",
    bannerTitle: "COIN MEGA LEAGUE",
    description:
      "Portfolio Leagues are where skill and strategy come together in an exhilarating crypto fantasy gameplay. Dive into an exciting adventure and make big returns, every 2 minutes!",
    heading: "Coin Mega League",
    ctaTitle: "Play Portfolio League ",
  },
  {
    image: "/card_image.svg",
    bannerTitle: "COIN MEGA LEAGUE",
    description:
      "Portfolio Leagues are where skill and strategy come together in an exhilarating crypto fantasy gameplay. Dive into an exciting adventure and make big returns, every 2 minutes!",
    heading: "Coin Mega League",
    ctaTitle: "Play Portfolio League ",
  },
  {
    image: "/card_image.svg",
    bannerTitle: "COIN MEGA LEAGUE",
    description:
      "Portfolio Leagues are where skill and strategy come together in an exhilarating crypto fantasy gameplay. Dive into an exciting adventure and make big returns, every 2 minutes!",
    heading: "Coin Mega League",
    ctaTitle: "Play Portfolio League ",
  },
];
const InfoCards = () => {
    return (
    
    <div className={styles.cards_container}>
    {CARDS.map((item, index) => (
      <div className={styles.cards} key={index}>
        <div className={styles.card_banner}>
          <div className={styles.banner_title}>{item.bannerTitle}</div>
          <Image
            src={item.image}
            width={250}
            height={180}
            alt={item.bannerTitle}
          />
        </div>
        <div className={styles.card_heading}>{item.heading}</div>
        <div className={styles.card_description}>{item.description}</div>
        <div className={styles.cta_button}>{item.ctaTitle}</div>
      </div> 
    ))}
    </div>
    )
}

export default InfoCards;