import { useState } from 'react';
import App from './App';
import EcommerceFashion from './projects/EcommerceFashion';
import RestaurantFood from './projects/RestaurantFood';
import DigitalMarketing from './projects/DigitalMarketing';
import RealEstate from './projects/RealEstate';
import OnlineLearningPlatform from './projects/OnlineLearningPlatform';
// import FitnessWellness from './projects/FitnessWellness';

export interface RouterProps {
    currentPage?: string;
    setCurrentPage?: (page: string) => void;
}

const Router = () => {
    const [currentPage, setCurrentPage] = useState<string>('home');

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <App currentPage={currentPage} setCurrentPage={setCurrentPage} />;
            case 'ecommerce-fashion':
                return <EcommerceFashion currentPage={currentPage} setCurrentPage={setCurrentPage} />;
            case 'restaurant-food':
                return <RestaurantFood currentPage={currentPage} setCurrentPage={setCurrentPage} />;
            case 'digital-marketing':
                return <DigitalMarketing currentPage={currentPage} setCurrentPage={setCurrentPage} />;
            case 'real-estate':
                return <RealEstate currentPage={currentPage} setCurrentPage={setCurrentPage} />;
            case 'online-learning-platform':
                return <OnlineLearningPlatform currentPage={currentPage} setCurrentPage={setCurrentPage} />;
            // case 'fitness-wellness':
            //   return <FitnessWellness currentPage={currentPage} setCurrentPage={setCurrentPage} />;
            default:
                return <App currentPage={currentPage} setCurrentPage={setCurrentPage} />;
        }
    };

    return <div>{renderPage()}</div>;
};

export default Router;