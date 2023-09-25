import Image from 'next/image';
import './sidebar.scss';
const Sidebar = ({isOpen, setIsOpen }) => {

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="toggle-button" onClick={toggleSidebar}>
        <Image src="/hamburger.svg" width={36} height={36} />
      </div>
      {isOpen ? (
        <div className="sidebar-content">
          <div>
            <div className="sidebar_card_container">
              <div className="sidebar_card active">
                <Image
                  src="/sidebar_icons/explore.svg"
                  width={24}
                  height={24}
                />
                Explore
              </div>
              <div className="sidebar_card">
                <Image src="/sidebar_icons/footer.svg" width={24} height={24} />
                Favorites
              </div>
            </div>
            <div className="sidebar_card_container">
              <div className="sidebar_card">
                <Image src="/sidebar_icons/game.svg" width={24} height={24} />
                Games
                <Image src="/footer_icons/icon5.svg" width={24} height={24} />
              </div>
            </div>
            <div className="sidebar_card_container">
              <div className="sidebar_card">
                <Image
                  src="/sidebar_icons/portfolio.svg"
                  width={24}
                  height={24}
                />
                Portfolio
              </div>
            </div>
            <div className="sidebar_card_container">
              <div className="sidebar_card">
                <Image src="/sidebar_icons/winner.svg" width={24} height={24} />
                Winners
              </div>
              <div className="sidebar_card">
                <Image src="/sidebar_icons/badge.svg" width={24} height={24} />
                Badges
              </div>
              <div className="sidebar_card">
                <Image src="/sidebar_icons/badge.svg" width={24} height={24} />
                Promotions
              </div>
            </div>
            <div className="sidebar_card_container">
              <div className="sidebar_card">
                <Image
                  src="/sidebar_icons/affiliate.svg"
                  width={24}
                  height={24}
                />
                Affiliate
              </div>
              <div className="sidebar_card">
                <Image
                  src="/sidebar_icons/affiliate.svg"
                  width={24}
                  height={24}
                />
                Kandlepedia
              </div>
              <div className="sidebar_card">
                <Image
                  src="/sidebar_icons/affiliate.svg"
                  width={24}
                  height={24}
                />
                User Guides
              </div>
              <div className="sidebar_card">
                <Image
                  src="/sidebar_icons/affiliate.svg"
                  width={24}
                  height={24}
                />
                Blog
              </div>
            </div>
            <div className="sidebar_card_container">
              <div className="sidebar_card">
                <Image
                  src="/sidebar_icons/portfolio.svg"
                  width={24}
                  height={24}
                />
                Portfolio
              </div>
            </div>
          </div>
          <div>
            <div className="sidebar_card_container">
              <div className="sidebar_card">
                <Image
                  src="/sidebar_icons/headset.svg"
                  width={24}
                  height={24}
                />
                Live Support
              </div>
            </div>
            <div className="sidebar_card_container">
              <div className="sidebar_card">
                <Image
                  src="/footer_icons/community/globe.svg"
                  width={24}
                  height={24}
                />
                Language: English
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="sidebar-content">
          <div className="close">
            <div className="sidebar_card_container">
              <Image src="/sidebar_icons/white_explore.svg" width={24} height={24} />
            </div>
            <div className="sidebar_card_container">
              <Image src="/sidebar_icons/game.svg" width={24} height={24} />
            </div>
            <div className="sidebar_card_container">
              <Image src="/sidebar_icons/badge.svg" width={24} height={24} />
            </div>
            <div className="sidebar_card_container">
              <Image src="/sidebar_icons/footer.svg" width={24} height={24} />
            </div>
            <div className="sidebar_card_container">
              <Image
                src="/sidebar_icons/affiliate.svg"
                width={24}
                height={24}
              />
            </div>
          </div>
          <div className='close'>
            <div className="sidebar_card_container">
              <Image src="/sidebar_icons/headset.svg" width={24} height={24} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
