import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

type FilterSelectProps = React.ComponentProps<'select'> & {
  testId?: string;
  wrapperClassName?: string;
};

export function FilterSelect({
  testId,
  wrapperClassName,
  className,
  children,
  ...props
}: FilterSelectProps) {
  return (
    <div className={cn('relative w-full', wrapperClassName)}>
      <select
        data-testid={testId}
        className={cn(
          'w-full h-12 pl-4 pr-12 rounded-[3px] border border-[#EDEFF2] bg-white text-[#333333] font-body text-sm appearance-none focus:ring-2 focus:ring-primary focus:outline-none',
          className,
        )}
        {...props}
      >
        {children}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex w-11 items-center justify-center border-l border-[#EDEFF2] bg-[#F8F9FA] rounded-r-[2px]">
        <ChevronDown className="w-4 h-4 text-[#0F172A]" strokeWidth={2.25} />
      </div>
    </div>
  );
}
