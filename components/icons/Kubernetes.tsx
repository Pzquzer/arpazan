import StackIcon from "tech-stack-icons";

interface IconProps {
  className?: string;
}

export default function Kubernetes({ className = '' }: IconProps) {
  return (
   <StackIcon name="kubernetes" className={className} />
  );
}
