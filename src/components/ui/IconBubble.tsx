import type { LucideIcon } from 'lucide-react';

type IconBubbleProps = {
  icon: LucideIcon;
  className?: string;
};

export default function IconBubble({ icon: Icon, className = 'h-7 w-7' }: IconBubbleProps) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff3d81,#ff5c9a)] text-white ${className}`}
    >
      <Icon size={14} />
    </div>
  );
}