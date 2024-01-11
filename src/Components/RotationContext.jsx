import React, { createContext, useContext, useState, useMemo } from 'react';

const RotationContext = createContext();

export const RotationProvider = ({ children }) => {
    const [rotation, setRotation] = useState([ 0, 0, 0 ]);

    const updateRotation = (newRotation) => {
        setRotation(newRotation);
    };

    const contextValue = useMemo(() => ({ rotation, updateRotation }), [rotation]);

    return (
        <RotationContext.Provider value={contextValue}>
        {children}
        </RotationContext.Provider>
    );
};

export const useRotation = () => {
    const context = useContext(RotationContext);

    if (!context) {
        throw new Error('useRotation must be used within a RotationProvider');
    }

    return context;
};