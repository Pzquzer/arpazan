import StackIcon from "tech-stack-icons";

interface IconProps {
  className?: string;
}

export default function Grafana({ className = '' }: IconProps) {
  return (
   <StackIcon name="grafana" className={className} />
  );
}
