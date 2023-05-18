import { Endpoint } from 'hooks';
import { ChangeEvent, useState, useEffect } from 'react';

export function useAddExerciseForm() {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleChangeTitle = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => setTitle(value);
  const handleChangeDescription = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => setDescription(value);
  const handleAddClick = () => {console.log('add')}

  return {
    title,
    description,
    isAddButtonDisabled: !title.trim().length,
    handleChangeTitle,
    handleChangeDescription,
    handleAddClick,
  }
}
