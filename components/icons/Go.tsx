import StackIcon from "tech-stack-icons";

interface IconProps {
  className?: string;
}

export default function Go({ className = '' }: IconProps) {
  return (
   <StackIcon name="go" className={className} />
  );
}
