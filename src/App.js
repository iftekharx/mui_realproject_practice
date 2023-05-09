import { Button, Typography } from '@mui/material'
import { Add, Settings } from '@mui/icons-material'
import styled from '@emotion/styled'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Rightbar from './components/Rightbar'
import { Box } from '@mui/material'
import Stack from '@mui/material/Stack'

function App() {
  return (
    <Box>
      {/* navbar */}
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  )
}

export default App
