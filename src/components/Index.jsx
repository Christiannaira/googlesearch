import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Results from './Results';

const Index = () => {
    return (
        <div className='p-4'>
            <Routes>

                <Route exact path='/' element={<Results />} />
                <Route path="/search" element={<Results />} />
                <Route path="/images" element={<Results />} />
                <Route path="/news" element={<Results />} />
                <Route path="/videos" element={<Results />} />

            </Routes>
        </div>
    )
}

export default Index;
