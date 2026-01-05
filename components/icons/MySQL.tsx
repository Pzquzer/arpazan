import StackIcon from "tech-stack-icons";

interface IconProps {
  className?: string;
}

export default function MySQL({ className = '' }: IconProps) {
  return (
   <StackIcon name="mysql" className={className} />
  );
}
