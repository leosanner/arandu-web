type FieldsTemplate = {
  inputName: string;
  inputPlaceholder: string;
  inputType?: string;
  labelName: string;
};

type FormTemplateProps = {
  fieldsTemplate: FieldsTemplate[];
} & React.ComponentProps<'form'>;

export function FormTemplate({ action }: FormTemplateProps) {
  return <form action={action} className='flex flex-col w-full'></form>;
}
