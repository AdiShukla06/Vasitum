// Header.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';
import { FaBars } from 'react-icons/fa';

// Mock the toggleSidebar function
const toggleSidebar = jest.fn();

describe('Header Component', () => {
  test('renders Header component', () => {
    render(<Header toggleSidebar={toggleSidebar} />);
    
    // Check if the search input is in the document
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();

    // Check if the profile image and name are in the document
    expect(screen.getByAltText('Profile')).toBeInTheDocument();
    expect(screen.getByText('Aditya Shukla')).toBeInTheDocument();
  });

  test('calls toggleSidebar when the menu button is clicked', () => {
    render(<Header toggleSidebar={toggleSidebar} />);
    
    // Click the menu button
    fireEvent.click(screen.getByRole('button', { name: /menu/i }));

    // Check if toggleSidebar has been called
    expect(toggleSidebar).toHaveBeenCalledTimes(1);
  });
});
