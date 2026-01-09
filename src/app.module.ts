import { Module } from '@nestjs/common';
import { InboundEmailController } from './inbound-email/inbound-email.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [InboundEmailController,AppController],
  providers: [AppService],
})
export class AppModule {}
