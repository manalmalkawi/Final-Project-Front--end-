
function MyButton({ x, className, href }) {
  return (
    <a
      className={`btn_one ${className ? className : ""}`}
      href={href}
    >
      {x}
    </a>
  );
}

export default MyButton;
