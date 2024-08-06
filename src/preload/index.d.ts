import { GetNotes, ReadNote, WriteNote, CreateNote } from '@/shared/types'

declare global {
  interface Window {
    context: {
      locale: string
      getNotes: GetNotes
      readNote: ReadNote
      writeNote: WriteNote
      createNote: CreateNote
    }
  }
}
