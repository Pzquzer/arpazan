import * as Icons from './icons';

interface IconProps {
  name: string;
  className?: string;
}

export default function Icon({ name, className = '' }: IconProps) {
  // Map tech names to icon components
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    laravel: Icons.Laravel,
    jquery: Icons.jQuery,
    git: Icons.Git,
    mysql: Icons.MySQL,
    nginx: Icons.Nginx,
    aws: Icons.AWS,
    nestjs: Icons.NestJS,
    fastify: Icons.Fastify,
    postgresql: Icons.PostgreSQL,
    go: Icons.Go,
    docker: Icons.Docker,
    kubernetes: Icons.Kubernetes,
    react: Icons.React,
    'react admin': Icons.React,
    tailwind: Icons.Tailwind,
    'tailwind css': Icons.Tailwind,
    redis: Icons.Redis,
    rabbitmq: Icons.RabbitMQ,
    grafana: Icons.Grafana,
    kong: Icons.Kong,
    'kong gateway': Icons.Kong,
    k6: Icons.k6,
    elementui: Icons.ElementUi,
    'element ui': Icons.ElementUi,
    'element-ui': Icons.ElementUi,
  };

  const IconComponent = iconMap[name.toLowerCase()];

  if (IconComponent) {
    return <IconComponent className={className} />;
  }

  // Fallback to text if icon not found
  return <span className="text-xs">{name}</span>;
}
