import { Navbar } from 'widgets/Navbar/inxex';
import { AppRouter } from './providers/routerProvider';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';


const App = () => {
    
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Suspense fallback={<div>Loading translations...</div>}>
            <div className='app'>
                <Navbar />
                <div className='content-page'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </div>
        </Suspense>
    )
};

export default App;