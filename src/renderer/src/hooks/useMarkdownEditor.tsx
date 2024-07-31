import { useAtomValue } from 'jotai'
import { selectedNoteAtom } from '../store'

export const useMarkdownEditor = () => {
  const selectNote = useAtomValue(selectedNoteAtom)

  return {
    selectNote
  }
}
