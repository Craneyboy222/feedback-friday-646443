import { render } from 'react-dom';

function renderComponent(Component: React.FC, props: any, elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    render(<Component {...props} />, element);
  } else {
    console.error(`Failed to find element with id ${elementId}`);
  }
}

export { renderComponent };