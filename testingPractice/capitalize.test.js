import {capitalize} from './capitalize';

test ('Capitalize', () => 
  expect(capitalize('reanto')).toMatch(/^[A-Z][a-z]/))
