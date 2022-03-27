import {Action} from "./action";

type ActionClass<A extends Action> = {new(..._: any): A};

export type {ActionClass}