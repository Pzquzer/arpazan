import StackIcon from "tech-stack-icons";

interface IconProps {
  className?: string;
}

export default function Redis({ className = '' }: IconProps) {
  return (
   <StackIcon name="redis" className={className} />
  );
}
