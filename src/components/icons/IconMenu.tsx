import { cn } from '@/utils/cn';
import type { IconProps } from '@/components/icons/IconSVGs';

type IconMenuProps = IconProps & {
  isOpen: boolean;
  isScrolled: boolean;
}

export const IconMenu = ({ className, isOpen, isScrolled }: IconMenuProps) => {
  return <div className={cn('flex flex-col gap-1 relative [&_div]:h-0.5 rounded-[2px] [&_div]:transition-all [&_div]:duration-300', {
    '[&_div]:bg-white': isScrolled,
    '[&_div]:bg-primary': !isScrolled
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