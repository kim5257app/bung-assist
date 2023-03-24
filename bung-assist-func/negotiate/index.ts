import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest, info: any): Promise<void> {
    context.log('negotiate:', info);

    context.res.body = info;
};

export default httpTrigger;