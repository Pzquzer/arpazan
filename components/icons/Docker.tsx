import StackIcon from "tech-stack-icons";

interface IconProps {
  className?: string;
}

export default function Docker({ className = '' }: IconProps) {
  return (
    <StackIcon name="docker" className={className} />
  );
}
