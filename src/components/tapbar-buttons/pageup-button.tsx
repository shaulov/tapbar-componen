import "./tapbar-buttons.css";

export function PageupButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button className="tapbar-button" onClick={scrollToTop}>
      <img src="./images/icons/pageup.svg" width="15" height="18" alt="" />
    </button>
  );
}