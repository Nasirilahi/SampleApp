export const actionDispatcher = ( type, data ) => {
    if(data || data===false)
        return {
            type,
            data,
        };
    else
        return {
            type,
        };    
};

