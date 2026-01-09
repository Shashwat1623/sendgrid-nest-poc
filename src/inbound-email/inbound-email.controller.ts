import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
  Body,
} from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller()
export class InboundEmailController {

  @Post('inbound-email')
  @UseInterceptors(
    AnyFilesInterceptor({
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, unique + extname(file.originalname));
        },
      }),
    }),
  )
  async receiveEmail(
    @Body() body: any,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    console.log('📩 New Email Received');

    const { from, to, subject, text, html } = body;

    console.log('From:', from);
    console.log('To:', to);
    console.log('Subject:', subject);
    console.log('Text:', text?.substring(0, 300));

    if (files?.length) {
      console.log(`📎 Attachments: ${files.length}`);
      files.forEach((f) => {
        console.log('Saved file:', f.path);
      });
    } else {
      console.log('No attachments');
    }

    return 'OK'; // SendGrid needs 200 response
  }
}
