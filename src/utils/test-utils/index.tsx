import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import SummaryContextWrapper, { ISummaryContextProps } from '../../contexts/SummaryContext';

interface ICustomRenderOptions {
  providerProps?: ISummaryContextProps;
  options?: Omit<RenderOptions, 'wrapper'>;
}

const customRender = (
  ui: ReactElement,
  { providerProps, ...options }: ICustomRenderOptions = { providerProps: {} },
) => {
  render(ui, {
    wrapper: ({ children }) => <SummaryContextWrapper {...providerProps}>{children}</SummaryContextWrapper>,
    ...options,
  });
};

export * from '@testing-library/react';
export { customRender as render };
