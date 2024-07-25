import { RootLayout, Sidebar, Content } from './components/AppLayout'

function App(): JSX.Element {
  return (
    <RootLayout>
      <Sidebar className="p-2"></Sidebar>
      <Content className="border-1 bg-zinc-900/50 border-l-white/20"></Content>
    </RootLayout>
  )
}

export default App
