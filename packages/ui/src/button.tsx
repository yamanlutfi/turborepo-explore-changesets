export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...other }: ButtonProps): JSX.Element {
  return (
    <button type="button" data-testid="my-button" {...other}>
      {children}
    </button>
  );
}

Button.displayName = "Button";
