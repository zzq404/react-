import React from 'react'
export const lazyComponent = path => React.lazy(()=> import(`../${path}`));