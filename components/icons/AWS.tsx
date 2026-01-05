import StackIcon from "tech-stack-icons";

interface IconProps {
  className?: string;
}

export default function AWS({ className = '' }: IconProps) {
  return (
    <StackIcon name="aws" className={className} />
  );
}
