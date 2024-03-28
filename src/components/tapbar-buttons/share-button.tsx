import "./tapbar-buttons.css";

export function ShareButton() {
  const handleClick = () => {
    if (navigator.share) {
      navigator.share({
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  }

  return (
    <button className="tapbar-button" onClick={handleClick}>
      <img src="/images/icons/share.svg" width="15" height="20" alt="" />
    </button>
  );
}