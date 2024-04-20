import { ExecutionContext, InternalServerErrorException, createParamDecorator } from "@nestjs/common";

export const GetRowHeaders = createParamDecorator(
    (data, ctx: ExecutionContext) => {
        
        const req = ctx.switchToHttp().getRequest();
        
        const rowHeaders = req.rawHeaders;

        return rowHeaders;
    }
);