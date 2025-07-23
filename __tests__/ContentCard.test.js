import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from '../src/components/ContentCard';

jest.mock('../src/api/api', () => ({
  getContent: jest.fn().mockResolvedValue({
    thumbNailImage: 'https://example.com/thumb.jpg',
    mainImage: 'https://example.com/main.jpg',
    userName: 'Test User',
    subTitle: 'Test Subtitle',
    text: '<html><body><p>Test Content</p></body></html>',
    id: 1,
    logo: 'https://example.com/logo.jpg',
    title: 'Test Title'
  })
}));

describe('ContentCard', () => {
  it('renders and can refresh', async () => {
    const { findByTestId } = render(<HomeScreen token="testtoken" />);
    const refreshBtn = await findByTestId('refresh-btn');
    expect(refreshBtn).toBeTruthy();
    fireEvent.press(refreshBtn);
  });
});