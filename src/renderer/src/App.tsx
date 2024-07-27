import { Content, RootLayout, Sidebar, DraggableTopBar, ActionButtonsRow } from '@/components'

const App = () => {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className="p-2">
          <ActionButtonsRow className="flex justify-between mt-1" />
        </Sidebar>
        <Content className="border-1 bg-zinc-900/50 border-l-white/20"></Content>
      </RootLayout>
    </>
  )
}

export default App
