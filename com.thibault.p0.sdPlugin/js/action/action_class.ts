type ActionClass<A extends ActionInterface> = {new(..._: any): A};

export type {ActionClass}