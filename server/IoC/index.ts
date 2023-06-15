import { Container } from 'inversify';

import ITest from '../application/ITest';
import Test from '../application/Test';

const container = new Container();

container.bind(ITest).to(Test);

export default container;
