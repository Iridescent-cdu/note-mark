import { NoteContent, NoteInfo } from './models'

export type GetNotes = () => Promise<NoteInfo[]>

export type ReadNote = (fileName: NoteInfo['title']) => Promise<NoteContent>
