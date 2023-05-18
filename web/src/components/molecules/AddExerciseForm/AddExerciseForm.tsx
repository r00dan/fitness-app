import { Button, ButtonThemes, Input } from "atoms";
import { useAddExerciseForm } from "./useAddExerciseForm";

export function AddExerciseForm() {
  const {
    title,
    description,
    isAddButtonDisabled,
    handleChangeTitle,
    handleChangeDescription,
    handleAddClick,
  } = useAddExerciseForm();
  return (
    <div>
      <div>Add new exercise</div>
      <Input
        id="add-exercise-form"
        label="Title"
        value={title}
        onChange={handleChangeTitle}
      />
      <Input
        id="add-exercise-form"
        label="Description"
        value={description}
        onChange={handleChangeDescription}
      />
      <Button
        theme={ButtonThemes.PRIMARY}
        disabled={isAddButtonDisabled}
        onClick={handleAddClick}
      >
        Add
      </Button>
    </div>
  )
}
