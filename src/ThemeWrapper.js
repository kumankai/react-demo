import { useTheme } from './contexts/ThemeContext';

const ThemeWrapper = ({ children }) => {
    const { theme } = useTheme();

    return (
        <div style={{
            background: theme === 'light' ? '#fff' : '#333', 
            color: theme === 'light' ? '#000' : '#fff', 
            padding: '20px',
            textAlign: 'center',
            minHeight: '100vh' 
        }}>
            {children}
        </div>
    );
};

export default ThemeWrapper;