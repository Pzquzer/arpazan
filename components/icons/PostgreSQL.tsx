import StackIcon from "tech-stack-icons";

interface IconProps {
  className?: string;
}

export default function PostgreSQL({ className = '' }: IconProps) {
  return (
    <StackIcon name="postgresql" className={className} />
  );
}
