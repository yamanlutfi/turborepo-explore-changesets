export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...other }: ButtonProps): JSX.Element {
  return (
    <button data-testid="my-button-4" type="button" {...other}>
      {children}
    </button>
  );
}

Button.displayName = "Button";
