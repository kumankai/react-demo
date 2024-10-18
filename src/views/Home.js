import ThemeWrapper from "../ThemeWrapper";
import { useTheme } from "../contexts/ThemeContext";

const Home = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <ThemeWrapper>
            <h1>Current Theme: {theme}</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </ThemeWrapper>
    );
}

export default Home;