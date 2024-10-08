import "bulma/css/bulma.min.css"
import { Block, Box, Button } from "./bulma"

const App = () => {
  return (
    <div className="App">
      <Block>Block</Block>
      <Box>Box</Box>
      <Button color="primary" iconStart="check" iconEnd="house">
        Click Me!
      </Button>
    </div>
  )
}

export default App
