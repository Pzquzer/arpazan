import StackIcon from "tech-stack-icons";

interface IconProps {
  className?: string;
}

export default function Laravel({ className = '' }: IconProps) {
  return (
   <StackIcon name="laravel" className={className} />
  );
}
