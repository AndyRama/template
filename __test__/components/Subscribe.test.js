import React, { createContext }  from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Subscribe from '@/app/components/Subscribe';


// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}

  observe() {
    // do nothing
  }

  disconnect() {
    // do nothing
  }
};

describe('Component - Subscribe', () => {

  // Renders the Subscribe-component with main-title
  it('should render the subscribe-component with main-title', () => {
    render(<Subscribe />);
    expect(screen.getByText("Never Miss an Update, Subscribe Today")).toBeInTheDocument();
  });

  // Renders the subscribe-component with main-subTitle
  it('should render the subscribe-component with main-subtitle', () => {
    render(<Subscribe />);
    expect(screen.getByText("Join our community")).toBeInTheDocument();
  });

  // Renders in the subscribe-component description for subscribeContent
  it('should render in the subscribe-component description for subscribeContent', () => {
    render(<Subscribe />);
    expect(screen.getByText("Join our community of subscribers today and stay connected with all the exciting developements!")).toBeInTheDocument();  });

  // it('should handle empty subscribeContent.form.placeholder', () => {
  //   const emptyPlaceholder = { ...subscribeContent, form: { ...subscribeContent.form, placeholder: "" } };
  //   render(<Subscribe />);
  //   expect(screen.getByPlaceholderText(emptyPlaceholder.form.placeholder)).toBeInTheDocument();
  // });

  // it('should handle empty subscribeContent.heading.subtitle', () => {
  //   const emptySubtitle = { ...subscribeContent, heading: { ...subscribeContent.heading, subtitle: "" } };
  //   render(<Subscribe />);
  //   expect(screen.queryByText(emptySubtitle.heading.subtitle)).toBeNull();
  // });

});
