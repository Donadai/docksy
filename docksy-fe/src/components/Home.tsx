import React from 'react';

const Home: React.FC = () => {
return (
    <div className="home-page">
        <header>
            <h1>Welcome to Your App</h1>
        </header>
        <main>
            <p>
                This is your home page. You can customize it to display your content and features.
            </p>
        </main>
        <footer>
            <p>&copy; {new Date().getFullYear()} Your App</p>
        </footer>
    </div>
);
};

export default Home;
