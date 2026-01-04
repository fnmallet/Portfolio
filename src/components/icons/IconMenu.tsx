import { cn } from '@/utils/cn';
import type { IconProps } from '@/components/icons/IconSVGs';

type IconMenuProps = IconProps & {
  isOpen: boolean;
}

export const IconMenu = ({ className, isOpen }: IconMenuProps) => {
  return <div className={cn('flex flex-col h-[1.17rem] justify-between relative [&_div]:h-0.5 rounded-[2px] [&_div]:bg-primary [&_div]:transition-all [&_div]:duration-300', className)}>
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