import StackIcon from "tech-stack-icons";

interface IconProps {
  className?: string;
}

export default function Git({ className = '' }: IconProps) {
  return (
    <StackIcon name="git" className={className} />
  );
}
