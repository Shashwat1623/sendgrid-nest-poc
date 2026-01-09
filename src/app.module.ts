import { Module } from '@nestjs/common';
import { InboundEmailController } from './inbound-email/inbound-email.controller';

@Module({
  imports: [],
  controllers: [InboundEmailController],
  providers: [],
})
export class AppModule {}
