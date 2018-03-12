import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import requestAnimationFrame from './shim'

configure({ adapter: new Adapter(), disableLifecycleMethods: true })