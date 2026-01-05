import StackIcon from "tech-stack-icons";

interface IconProps {
  className?: string;
}

export default function jQuery({ className = '' }: IconProps) {
  return (
    <StackIcon name="jquery" className={className} />
  );
}
