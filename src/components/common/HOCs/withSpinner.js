import React from 'react';
import Loader from '../Loader'

const withSpinner = Comp => ({ isLoading, children, ...props }) =>
    isLoading ? <Loader /> : <Comp {...props}>{children}</Comp>

export default withSpinner;