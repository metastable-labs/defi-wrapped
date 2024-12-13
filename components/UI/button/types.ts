interface IDWButton {
  title: string;
  onClick?: () => void;
  loading?: boolean;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  bounceOnRender?: boolean;
}
