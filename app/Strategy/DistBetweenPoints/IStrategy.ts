export interface IStrategy<ParamType, ReturnType> {
    execute(param: ParamType): ReturnType;
}
