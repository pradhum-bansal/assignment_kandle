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
    color: 'linear-gradient(95deg, rgba(160, 134, 42, 0.75) -1.05%, rgba(183, 149, 35, 0.75) 39.99%, rgba(155, 130, 43, 0.75) 98.88%)'
  },
  {
    image: "/coin_league.svg",
    bannerTitle: "COIN LEAGUE",
    description:
      "Portfolio Leagues are where skill and strategy come together in an exhilarating crypto fantasy gameplay. Dive into an exciting adventure and make big returns, every 2 minutes!",
    heading: "Portfolio League",
    ctaTitle: "Play Coin Mega League",
    color: 'linear-gradient(99deg, rgba(9, 85, 32, 0.90) 0%, rgba(14, 108, 42, 0.90) 50%, rgba(16, 73, 33, 0.90) 100%)'
  },
  {
    image: "/card_image.svg",
    bannerTitle: "PORTFOLIO LEAGUE",
    description:
      "Infamously known for their Double or Nothing nature, Coin Leagues are a Head to Head gameplay where you can make double returns if you dominate the league, in just 30 seconds!",
    heading: "Coin League",
    ctaTitle: "Play Coin League",
    color: 'linear-gradient(99deg, #5E2EB8 0%, #4A158D 50%, #5D2EB5 100%)'
  },
  {
    image: "/card_image.svg",
    bannerTitle: "HIGH LOW",
    description: "High/Low is the ultimate Player vs Environment (PvE) game, where your knowledge and prediction skills together pave the way to winning the ultimate reward of 10 USDT.", 
    heading: "High - Low",
    ctaTitle: "Play High Low Game",
    color: 'linear-gradient(99deg, #B96415 0%, #9C5D22 50%, #C67020 100%)'
  },
];
const InfoCards = () => {
    return (
    
    <div className={styles.cards_container}>
    {CARDS.map((item, index) => (
      <div className={styles.cards} key={index}>
        <div className={styles.card_banner} style={{background: item.color}}>
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