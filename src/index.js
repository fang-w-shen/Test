import { render } from 'react-dom'
import App from './pages/App'
import CssBaseline from '@mui/material/CssBaseline';

const Root = () => (
    <>
        <CssBaseline />
        <App />
    </>

)

render(<Root />, document.getElementById('root'))