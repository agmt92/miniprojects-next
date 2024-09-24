import { useContext } from 'react';
import Title from '../ui/components/Title';
import { ThemeContext } from './context/theme-context';
import Button from '../ui/components/Button';

export default function Blog() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="container p-1">
            <Title text={`My Blog with ${theme} Theme`} classes='title' />
            <span style={{
                position: 'absolute',
                top: 120,
                right: 10,
            }}>
                <Button 
                btnClass= {`${theme === "dark" ? "btn-light" : "btn-dark"} btn-lg`} 
                text={theme === "light" ? "Dark" : "Light"} 
                onClick={toggleTheme} />
            </span>
                <article className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur culpa recusandae adipisci maxime, quae, consequatur reprehenderit debitis pariatur molestiae velit placeat praesentium assumenda distinctio veniam perspiciatis vitae. Ex, quo assumenda?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur culpa recusandae adipisci maxime, quae, consequatur reprehenderit debitis pariatur molestiae velit placeat praesentium assumenda distinctio veniam perspiciatis vitae. Ex, quo assumenda?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur culpa recusandae adipisci maxime, quae, consequatur reprehenderit debitis pariatur molestiae velit placeat praesentium assumenda distinctio veniam perspiciatis vitae. Ex, quo assumenda?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur culpa recusandae adipisci maxime, quae, consequatur reprehenderit debitis pariatur molestiae velit placeat praesentium assumenda distinctio veniam perspiciatis vitae. Ex, quo assumenda?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur culpa recusandae adipisci maxime, quae, consequatur reprehenderit debitis pariatur molestiae velit placeat praesentium assumenda distinctio veniam perspiciatis vitae. Ex, quo assumenda?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur culpa recusandae adipisci maxime, quae, consequatur reprehenderit debitis pariatur molestiae velit placeat praesentium assumenda distinctio veniam perspiciatis vitae. Ex, quo assumenda?
                </article>
        </div>
    );
}