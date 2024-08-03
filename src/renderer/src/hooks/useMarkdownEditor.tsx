import { autoSavingTime } from '@/shared/constants'
import { NoteContent } from '@/shared/models'
import { MDXEditorMethods } from '@mdxeditor/editor'
import { useAtomValue, useSetAtom } from 'jotai'
import throttle from 'lodash/throttle'
import { useRef } from 'react'
import { saveNoteAtom, selectedNoteAtom } from '../store'

export const useMarkdownEditor = () => {
  const selectNote = useAtomValue(selectedNoteAtom)
  const saveNote = useSetAtom(saveNoteAtom)
  const editorRef = useRef<MDXEditorMethods>(null)

  const handleAutoSaving = throttle(
    async (content: NoteContent) => {
      if (!selectNote) return

      console.info('Auto Saving:', selectNote.title)

      await saveNote(content)
    },
    autoSavingTime,
    {
      leading: false,
      trailing: true
    }
  )

  const handleBlur = async () => {
    if (!selectNote) return
    handleAutoSaving.cancel()
    const content = editorRef.current?.getMarkdown()

    if (content != null) {
      await saveNote(content)
    }
  }

  return {
    editorRef,
    selectNote,
    handleAutoSaving,
    handleBlur
  }
}
