import '@testing-library/jest-dom/extend-expect';


declare namespace jest {
  interface Matchers<R> {
    toBeInTheDocument(): R;
  }
}
