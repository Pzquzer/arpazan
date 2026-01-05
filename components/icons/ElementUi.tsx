import StackIcon from "tech-stack-icons";

interface IconProps {
  className?: string;
}

export default function ElementUi({ className = "" }: IconProps) {
  return <StackIcon name="elementui" className={className} />;
}
