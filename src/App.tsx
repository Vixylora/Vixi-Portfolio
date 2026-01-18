import Landing from './Archive/Components/Content/Landing'
import { PrimaryButton } from './components/index';

function App() {
  return (
    <>
      <div id='warning'>
        <h2>The website is under reconstruction</h2>
      </div>
      <PrimaryButton variant="simple" text="Click Me" />
      <Landing />
    </>
  )
}

export default App;  