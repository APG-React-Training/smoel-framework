
import './resources/styles/main.css'

import TitleText from './components/atoms/TitleText'
import InfoText from './components/atoms/InfoText'
import SearchField from './components/atoms/SearchField'

const App = () => {
  
  return(
    <div>
      <TitleText text='titel'/>
      <InfoText text='info'/>
      <SearchField />
    </div>
  )
 
}


export default App
