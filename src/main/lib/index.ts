import { appDirectoryName, fileEncoding } from '@/shared/constants'
import { NoteInfo } from '@/shared/models'
import { GetNotes, ReadNote, WriteNote } from '@/shared/types'
import { ensureDir, readdir, readFile, stat, writeFile } from 'fs-extra'
import { homedir } from 'os'

export const getRootDir = () => {
  return `${homedir()}/${appDirectoryName}`
}

export const getNotes: GetNotes = async () => {
  const rootDir = getRootDir()

  await ensureDir(rootDir)

  const notesFileNames = await readdir(rootDir, {
    encoding: fileEncoding,
    withFileTypes: false
  })

  const notes = notesFileNames.filter((fileName) => fileName.endsWith('.md'))

  return Promise.all(notes.map(getNoteInfoFromFileName))
}

export const getNoteInfoFromFileName = async (fileName: string): Promise<NoteInfo> => {
  const rootDir = getRootDir()

  const fileStats = await stat(`${rootDir}/${fileName}`)

  return {
    title: fileName.replace(/\.md$/, ''),
    lastEditTime: fileStats.mtimeMs
  }
}

export const readNote: ReadNote = async (fileName) => {
  const rootDir = getRootDir()

  return await readFile(`${rootDir}/${fileName}.md`, fileEncoding)
}

export const writeNote: WriteNote = async (fileName, content) => {
  const rootDir = getRootDir()

  await ensureDir(rootDir)

  await writeFile(`${rootDir}/${fileName}.md`, content, fileEncoding)
}
