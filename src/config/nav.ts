import * as React from 'react';

export const navigationRef = React.createRef();

interface NavigateParams {
  name: string;
  params?: object;
}

export function navigate({name, params}: NavigateParams) {
  navigationRef.current?.navigate(name, params);
}
