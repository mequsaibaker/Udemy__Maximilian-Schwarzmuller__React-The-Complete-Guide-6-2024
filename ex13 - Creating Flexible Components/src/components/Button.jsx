const Button = ({ children, mode = "filled", icon, ...props }) => {
  let cssClasses = "button " + mode + "-button";
  if (icon) {
    cssClasses += " icon-button";
  }
  return (
    <div>
      <button className={cssClasses} {...props}>
        <span className="button-icon">{icon ? icon : null}</span>
        <span>{children}</span>
      </button>
    </div>
  );
};

export default Button;
