import { TextEncoder, TextDecoder } from 'fast-text-encoding';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
