import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from '../styles/global';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Home from '../pages/Home';
import { MainContainer } from '../styles/container';
import NotFound from '../pages/NotFound';
type MyRoutesProps = {
    toggleTheme(): void;
};
export default function MyRoutes({ toggleTheme }: MyRoutesProps) {
    return (
        <Router>
            <GlobalStyle />
            <Header toggleTheme={toggleTheme} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    );
}
