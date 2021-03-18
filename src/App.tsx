import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import './styles/global.scss';
import { WatchmeProvider } from './contexts/watchmeContext';


export function App() {
  return (
    <WatchmeProvider>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <Content />
      </div>
    </WatchmeProvider>
  )
}