import { useState } from "react";

import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import CheckboxInput from "../components/checkbox-input";
import Text from "../components/text";
import InputText from "../components/input-text";

import TrashIcon from "../assets/icons/trash.svg?react";
import EditIcon from "../assets/icons/edit.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import ConfirmIcon from "../assets/icons/check-regular.svg?react";

export default function TaskItem() {
  const [isEditing, setIsEditing] = useState(false);

  const exitEditMode = () => {
    setIsEditing(false);
  };

  const handleEditTask = () => {
    setIsEditing((current) => !current);
  };

  return (
    <Card size="md" className="flex items-center gap-4">
      {!isEditing ? (
        <>
          {" "}
          <CheckboxInput />
          <Text className="flex-1">Fazer compras da semana</Text>
          <div className="flex gap-1">
            <ButtonIcon icon={TrashIcon} variant="tertiary" />
            <ButtonIcon icon={EditIcon} variant="tertiary" onClick={handleEditTask} />
          </div>
        </>
      ) : (
        <>
          <InputText className="flex-1" />
          <div className="flex gap-1">
            <ButtonIcon
              icon={XIcon}
              onClick={exitEditMode}
              variant="secondary"
            />
            <ButtonIcon
              icon={ConfirmIcon}
              onClick={handleEditTask}
              variant="primary"
            />
          </div>
        </>
      )}
    </Card>
  );
}
