import { useEffect, useState } from "react";
import { ShareButton } from "../tapbar-buttons/share-button";
import { PageupButton } from "../tapbar-buttons/pageup-button";
import { CommentsButton } from "../tapbar-buttons/commnets-button";
import { FavoriteButton } from "../tapbar-buttons/favorite-button";
import "./tapbar.css";

const TapbarItems = [
  { id: 1, name: 'share', label: 'Поделиться', component: ShareButton },
  { id: 2, name: 'pageup', label: 'Прокрутка наверх', component: PageupButton },
  { id: 3, name: 'comments', label: 'Комментарии', component: CommentsButton },
  { id: 4, name: 'favorite', label: 'Избранное', component: FavoriteButton },
];

export function Tapbar() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = document.documentElement.scrollTop;

      if (currentScrollTop > 200 && currentScrollTop > lastScrollTop) {
        setIsHidden(true);
      }
      
      if (currentScrollTop <= lastScrollTop) {
        setIsHidden(false);
      }

      setLastScrollTop(currentScrollTop);
    };

    const scrollTimeout = setTimeout(() => {
      setIsHidden(false);
    }, 1000);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isHidden, lastScrollTop]);

  return (
    <nav 
      className={`tapbar ${isHidden ? 'tapbar__hidden' : ''}`}
    >
      <ul className="tapbar--list">
        {TapbarItems.map(item => (
          <li className="tapbar--item" key={item.name}>
            <item.component />
          </li>
        ))}
      </ul>
    </nav>
  );
}