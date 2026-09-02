import { cn } from '@/utils/cn';
import type { IconProps } from '@/components/icons/IconSVGs';

type IconMenuProps = IconProps & {
  isOpen: boolean;
}

export const IconMenu = ({ className, isOpen }: IconMenuProps) => {
  return <div className={cn('flex flex-col gap-1 relative [&_div]:h-0.5 rounded-xs [&_div]:transition-all [&_div]:duration-300', {
    '[&_div]:bg-white': !isOpen,
    '[&_div]:bg-primary': isOpen
  }, className)}>
    <div className={cn({
      'absolute rotate-z-45 top-1/2 w-full': isOpen,
    })}></div>
    <div className={cn({
      'absolute bg-transparent!': isOpen,
    })}></div>
    <div className={cn({
      'absolute bg-transparent!': isOpen,
    })}></div>
    <div className={cn({
      'absolute -rotate-z-45 top-1/2 w-full': isOpen
    })}></div>
  </div>;
};