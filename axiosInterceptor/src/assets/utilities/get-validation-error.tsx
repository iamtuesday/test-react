import { TypeWithKey } from "../models/type-with-key"

export const getValidateError = (errorCode: any) => {
    const codeMatcher: TypeWithKey<string> = {
        ERR_NETWORK: "Se rompió la red"
    }
    return codeMatcher[errorCode]
}