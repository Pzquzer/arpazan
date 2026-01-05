import StackIcon from "tech-stack-icons";

interface IconProps {
  className?: string;
}

export default function React({ className = '' }: IconProps) {
  return (
    <StackIcon name="react" className={className} />
  );
}
