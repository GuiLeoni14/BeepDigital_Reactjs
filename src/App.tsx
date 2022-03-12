import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import MyRoutes from './routes';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
    AOS.init({
        once: true,
        duration: 1000,
    });
    const [theme, setTheme] = useState(light);
    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    };
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <MyRoutes />
            </ThemeProvider>
        </div>
    );
}

export default App;
