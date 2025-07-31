type FieldFormErrorsProps = {
  errors: string[];
};

export function FormFieldErrors({ errors }: FieldFormErrorsProps) {
  return (
    <div className='text-red-600 text-sm/tight mb-2'>
      {errors.map(error => {
        return <p key={`${Math.random()}`}>{error}</p>;
      })}
    </div>
  );
}
