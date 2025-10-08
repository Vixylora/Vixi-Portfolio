import Landing from './Components/Content/Landing'
import Navigation from './Navigation'
import TargetCursor from './Components/CursorTarget/TargetCursor'

function App() {
  return (
    <>
      <TargetCursor spinDuration={4} hideDefaultCursor={true} />
      <Navigation />
      <Landing />
    </>
  )
}

export default App
