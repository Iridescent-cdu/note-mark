import { RootLayout, Sidebar, Content } from './components/AppLayout'

function App(): JSX.Element {
  return (
    <RootLayout>
      <Sidebar className="p-2 border-4 border-red-500"></Sidebar>
      <Content className="border-4 border-blue-500"></Content>
    </RootLayout>
  )
}

export default App
