import { Button, Typography } from '@mui/material'
import { Add, Settings } from '@mui/icons-material'
import styled from '@emotion/styled'

function App() {
  const BlueButton = styled(Button)(({ theme }) => ({
    backgroundColor: 'skyblue',
    color: '#888',
    margin: 5,
    '&:hover': {
      backgroundColor: 'lightblue',
    },
    '&:disabled': {
      backgroundColor: 'gray',
      color: 'white',
    },
  }))

  return (
    <div className="App">
      <Button variant="text">Text</Button>
      <Button
        startIcon={<Settings />}
        variant="contained"
        color="secondary"
        size="small"
      >
        Contained
      </Button>
      <Button startIcon={<Add />} variant="contained">
        Add Button
      </Button>

      <Typography variant="h1" component="p">
        It uses h1 style but it's a p tag
      </Typography>
      <BlueButton>Blue Button</BlueButton>
      <BlueButton>Another Blue Button</BlueButton>
    </div>
  )
}

export default App
