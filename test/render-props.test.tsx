import '@testing-library/jest-dom/extend-expect';
import * as React from 'react';
import { render } from '@testing-library/react';
import { FlagsProvider, Feature } from '../src';

describe(Feature, () => {
  describe('array', () => {
    test('children - element - works', () => {
      const { queryByText } = render(
        <FlagsProvider features={['featured']}>
          <Feature name="featured">
            <h1>It works</h1>
          </Feature>
        </FlagsProvider>
      );

      expect(queryByText(/It works/i)).toBeInTheDocument();
    });

    test("children - element - doesn't works", () => {
      const { queryByText } = render(
        <FlagsProvider features={['featured']}>
          <Feature name="random">
            <h1>It works</h1>
          </Feature>
        </FlagsProvider>
      );

      expect(queryByText(/It works/i)).not.toBeInTheDocument();
    });

    test('children - function - works', () => {
      const { queryByText } = render(
        <FlagsProvider features={['featured']}>
          <Feature name="featured">
            {(isFeatured: boolean) =>
              isFeatured ? <h1>It works</h1> : <h1>It doesn't work</h1>
            }
          </Feature>
        </FlagsProvider>
      );

      expect(queryByText(/It works/i)).toBeInTheDocument();
      expect(queryByText(/It doesn't work/i)).not.toBeInTheDocument();
    });

    test("children - function - doesn't work", () => {
      const { queryByText } = render(
        <FlagsProvider features={['featured']}>
          <Feature name="random">
            {(isRandom: boolean) =>
              isRandom ? <h1>It works</h1> : <h1>It doesn't work</h1>
            }
          </Feature>
        </FlagsProvider>
      );

      expect(queryByText(/It works/i)).not.toBeInTheDocument();
      expect(queryByText(/It doesn't work/i)).toBeInTheDocument();
    });

    test('render - element', () => {
      const { queryByText } = render(
        <FlagsProvider features={['featured']}>
          <Feature name="featured" render={<h1>It works</h1>} />
        </FlagsProvider>
      );

      expect(queryByText(/It works/i)).toBeInTheDocument();
    });

    test('render - function - works', () => {
      const { queryByText } = render(
        <FlagsProvider features={['featured']}>
          <Feature
            name="featured"
            render={(isFeatured: boolean) =>
              isFeatured ? <h1>It works</h1> : <h1>It doesn't work</h1>
            }
          />
        </FlagsProvider>
      );

      expect(queryByText(/It works/i)).toBeInTheDocument();
      expect(queryByText(/It doesn't work/i)).not.toBeInTheDocument();
    });

    test("render - function - doesn't work", () => {
      const { queryByText } = render(
        <FlagsProvider features={['featured']}>
          <Feature
            name="random"
            render={(isRandom: boolean) =>
              isRandom ? <h1>It works</h1> : <h1>It doesn't work</h1>
            }
          />
        </FlagsProvider>
      );

      expect(queryByText(/It works/i)).not.toBeInTheDocument();
      expect(queryByText(/It doesn't work/i)).toBeInTheDocument();
    });
  });

  describe('object', () => {
    test('children - element', () => {
      const { queryByText } = render(
        <FlagsProvider features={{ featured: true }}>
          <Feature name="featured">
            <h1>It works</h1>
          </Feature>
        </FlagsProvider>
      );

      expect(queryByText(/It works/i)).toBeInTheDocument();
    });

    test('children - function - works', () => {
      const { queryByText } = render(
        <FlagsProvider features={{ featured: true }}>
          <Feature name="featured">
            {(isFeatured: boolean) =>
              isFeatured ? <h1>It works</h1> : <h1>It doesn't work</h1>
            }
          </Feature>
        </FlagsProvider>
      );

      expect(queryByText(/It works/i)).toBeInTheDocument();
      expect(queryByText(/It doesn't work/i)).not.toBeInTheDocument();
    });

    test("children - function - doesn't work", () => {
      const { queryByText } = render(
        <FlagsProvider features={{ featured: true }}>
          <Feature name="random">
            {(isRandom: boolean) =>
              isRandom ? <h1>It works</h1> : <h1>It doesn't work</h1>
            }
          </Feature>
        </FlagsProvider>
      );

      expect(queryByText(/It works/i)).not.toBeInTheDocument();
      expect(queryByText(/It doesn't work/i)).toBeInTheDocument();
    });

    test('render - element', () => {
      const { queryByText } = render(
        <FlagsProvider features={{ featured: true }}>
          <Feature name="featured" render={<h1>It works</h1>} />
        </FlagsProvider>
      );

      expect(queryByText(/It works/i)).toBeInTheDocument();
    });

    test('render - function - works', () => {
      const { queryByText } = render(
        <FlagsProvider features={{ featured: true }}>
          <Feature
            name="featured"
            render={(isFeatured: boolean) =>
              isFeatured ? <h1>It works</h1> : <h1>It doesn't work</h1>
            }
          />
        </FlagsProvider>
      );

      expect(queryByText(/It works/i)).toBeInTheDocument();
      expect(queryByText(/It doesn't work/i)).not.toBeInTheDocument();
    });

    test("render - function - doesn't work", () => {
      const { queryByText } = render(
        <FlagsProvider features={{ featured: true }}>
          <Feature
            name="random"
            render={(isRandom: boolean) =>
              isRandom ? <h1>It works</h1> : <h1>It doesn't work</h1>
            }
          />
        </FlagsProvider>
      );

      expect(queryByText(/It works/i)).not.toBeInTheDocument();
      expect(queryByText(/It doesn't work/i)).toBeInTheDocument();
    });
  });
});
