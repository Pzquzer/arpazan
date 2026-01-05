import StackIcon from "tech-stack-icons";

interface IconProps {
  className?: string;
}

export default function NestJS({ className = '' }: IconProps) {
  return (
   <StackIcon name="nestjs" className={className} />
  );
}
