
interface Props {
  children: text;
//   color: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button type="button" class="btn btn-primary" onClick={onClick} >
      {children}
    </button>
  );
};

export default Button;
