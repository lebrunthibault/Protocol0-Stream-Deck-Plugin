import 'reflect-metadata';

import { Container } from 'typedi';
import ActionFactory from "../com.thibault.p0.sdPlugin/js/action/action_factory";

test('container', function() {
    Container.get(ActionFactory).createActions();
});