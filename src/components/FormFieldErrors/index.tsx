import clsx from 'clsx';
import { HTMLAttributes } from 'react';

type FieldFormErrorsProps = {
  errors: string[];
  className?: HTMLAttributes<HTMLDivElement> | string;
};

export function FormFieldErrors({ errors, className }: FieldFormErrorsProps) {
  return (
    <div className={clsx('text-red-600 text-sm/tight mb-2', className)}>
      {errors.map(error => {
        return <p key={`${Math.random()}`}>{error}</p>;
      })}
    </div>
  );
}
