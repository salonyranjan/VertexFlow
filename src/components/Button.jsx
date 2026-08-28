const Button = ({ text, className = "", id }) => {
  const handleClick = (event) => {
    event.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;

    const top = target.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.15;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <a href={`#${id}`} onClick={handleClick} className={`${className} cta-wrapper`}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="" />
        </div>
      </div>
    </a>
  );
};

export default Button;
