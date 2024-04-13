import { join } from 'path';
import { Injectable, BadRequestException } from '@nestjs/common';
import { existsSync } from 'fs';

@Injectable()
export class FilesService {
 
    getStaticProductImage (imageName: string){
        const path = join(__dirname, '../../static/products', imageName);

        if(!existsSync) {
            throw new BadRequestException(`No product found with ${imageName}`);
        }

        const secureUrl = `http://localhost:3000/api/files/product/dasdasdasdasdasd`

        return path;
    }
}
