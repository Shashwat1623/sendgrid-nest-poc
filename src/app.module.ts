import { Module } from '@nestjs/common';
import { InboundEmailController } from './inbound-email/inbound-email.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SendgridService } from './sendgrid/sendgrid.service';

@Module({
  imports: [],
  controllers: [InboundEmailController,AppController],
  providers: [AppService,SendgridService],
})
export class AppModule {}
