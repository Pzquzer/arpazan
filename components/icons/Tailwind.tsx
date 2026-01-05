import StackIcon from "tech-stack-icons";

interface IconProps {
  className?: string;
}

export default function Tailwind({ className = '' }: IconProps) {
  return (
   <StackIcon name="tailwindcss" className={className} />
  );
}
