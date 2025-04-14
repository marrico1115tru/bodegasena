import { ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface SidebarButtonProps {
  to?: string;
  icon?: ReactNode;
  label?: string;
  isOpen: boolean;
  onClick?: () => void;
  activePaths?: string[];
  endIcon?: ReactNode;
  className?: string;
}

const SidebarButton = ({
  to,
  icon,
  label,
  isOpen,
  onClick,
  activePaths = [],
  endIcon,
  className = "",
}: SidebarButtonProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = activePaths.includes(location.pathname);

  const handleClick = () => {
    if (to) navigate(to);
    if (onClick) onClick();
  };

  return (
    <Button
      variant="ghost"
      onClick={handleClick}
      className={`flex items-center justify-between w-full gap-2 text-left hover:bg-slate-700 ${
        isActive ? "text-blue-400" : "text-slate-300"
      } ${className}`}
    >
      <div className="flex items-center gap-2">
        {icon}
        {isOpen && label}
      </div>
      {isOpen && endIcon}
    </Button>
  );
};

export default SidebarButton;
