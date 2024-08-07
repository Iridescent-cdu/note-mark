import { ActionButton, ActionButtonProps } from '@/components'
import { deleteNoteAtom } from '@/renderer/store'
import { useSetAtom } from 'jotai'
import { FaRegTrashCan } from 'react-icons/fa6'

export const DeleteNoteButton = ({ ...props }: ActionButtonProps) => {
  const deleteNote = useSetAtom(deleteNoteAtom)
  const handleCDelete = async () => {
    await deleteNote()
  }

  return (
    <ActionButton onClick={handleCDelete} {...props}>
      <FaRegTrashCan className="w-4 h-4 text-zinc-300"></FaRegTrashCan>
    </ActionButton>
  )
}
