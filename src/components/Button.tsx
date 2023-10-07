type IButtonProps = {
  buttonText?: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

function Button({
  buttonText = 'Ok', className = 'shopItem_button', type = 'button', onClick,
}: IButtonProps) {
  return (
    <button type={type} onClick={onClick} className={className}>
      <p>{buttonText}</p>
    </button>
  );
}

export default Button;
