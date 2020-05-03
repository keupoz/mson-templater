import { IChildComponent, IComponent, IParentComponent } from "../../Mson";

export function assertParentComponent(path: string, value: any): asserts value is IParentComponent {

}

export function assertChildComponent(path: string, value: any): asserts value is IChildComponent {

}

export function assertComponent(path: string, value: any): asserts value is IComponent {

}
