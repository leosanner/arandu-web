type FormFieldProps = {
  inputProps: React.ComponentProps<'input'>;
  labelProps: React.ComponentProps<'label'>;
  labelTitle: string;
};

export function FormField({
  inputProps,
  labelProps,
  labelTitle,
}: FormFieldProps) {
  return (
    <label className='flex flex-col mb-3' {...labelProps}>
      <span className='font-bold text-lg md:text-2xl'>{labelTitle}</span>
      <input
        className='md:text-lg border-b-1 focus:bg-zinc-100 focus:rounded-t- outline-none p-0.5'
        {...inputProps}
      />
    </label>
  );
}
