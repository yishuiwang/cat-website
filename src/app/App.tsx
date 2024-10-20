import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

const App: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default App;
