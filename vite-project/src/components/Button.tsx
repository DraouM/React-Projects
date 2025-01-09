interface Props {
  children: string;
  color?: "primary" | "secondary";
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button type="button" class={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
