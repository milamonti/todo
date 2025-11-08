import { useState, type ChangeEvent, type FormEvent } from "react";

import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import CheckboxInput from "../components/checkbox-input";
import Text from "../components/text";
import InputText from "../components/input-text";

import TrashIcon from "../assets/icons/trash.svg?react";
import EditIcon from "../assets/icons/edit.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import ConfirmIcon from "../assets/icons/check-regular.svg?react";
import { TaskState, type Task } from "../models/task";
import { cx } from "class-variance-authority";
import useTask from "../hooks/use-task";
import Skeleton from "../components/skeleton";

interface TaskItemProps {
  task: Task;
  loading?: boolean;
}

export default function TaskItem({ task, loading }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(task.state === TaskState.Creating);
  const [taskTitle, setTaskTitle] = useState(task.title || "");
  const {
    updateTask,
    updateTaskStatus,
    deleteTask,
    isDeletingTask,
    isUpdatingTask,
  } = useTask();

  const exitEditMode = async () => {
    if (task.state === TaskState.Creating) {
      await deleteTask(task.id);
    }
    setIsEditing(false);
  };

  const handleEditTask = () => {
    setIsEditing((current) => !current);
  };

  const handleChangeTaskTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value || "");
  };

  const handleSaveTask = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await updateTask(task.id, { title: taskTitle });
    setIsEditing(false);
  };

  const handleChangeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;

    updateTaskStatus(task.id, checked);
  };

  const handleClickOnDeleteTask = () => {
    deleteTask(task.id);
  };

  return (
    <Card size="md">
      {!isEditing ? (
        <div className="flex items-center gap-4">
          {" "}
          <CheckboxInput
            checked={task.concluded}
            onChange={handleChangeTaskStatus}
            loading={loading}
          />
          {!loading ? (
            <Text className={cx("flex-1", { "line-through": task.concluded })}>
              {task.title || "Título da tarefa"}
            </Text>
          ) : (
            <Skeleton className="flex-1 h-6" />
          )}
          <div className="flex gap-1">
            <ButtonIcon
              icon={TrashIcon}
              variant="tertiary"
              onClick={handleClickOnDeleteTask}
              loading={loading}
              handling={isDeletingTask}
            />
            <ButtonIcon
              icon={EditIcon}
              variant="tertiary"
              onClick={handleEditTask}
              loading={loading}
            />
          </div>
        </div>
      ) : (
        <form className="flex items-center gap-4" onSubmit={handleSaveTask}>
          <InputText
            value={taskTitle}
            className="flex-1"
            onChange={handleChangeTaskTitle}
            required
            autoFocus
          />
          <div className="flex gap-1">
            <ButtonIcon
              type="button"
              icon={XIcon}
              onClick={exitEditMode}
              variant="secondary"
            />
            <ButtonIcon
              type="submit"
              icon={ConfirmIcon}
              variant="primary"
              handling={isUpdatingTask}
            />
          </div>
        </form>
      )}
    </Card>
  );
}
