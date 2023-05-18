import { useNavigate } from "react-router-dom";

import style from './Link.module.scss';

interface LinkProps {
  to: string;
  children: string;
}

export function Link({
  children,
  to,
}: LinkProps) {
  const navigate = useNavigate();
  const handleLinkClick = () => navigate(to);
  return (
    <div
      className={style.root}
      onClick={handleLinkClick}
    >
      {children}
    </div>
  )
}
