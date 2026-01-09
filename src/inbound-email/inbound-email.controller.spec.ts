import { Test, TestingModule } from '@nestjs/testing';
import { InboundEmailController } from './inbound-email.controller';

describe('InboundEmailController', () => {
  let controller: InboundEmailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InboundEmailController],
    }).compile();

    controller = module.get<InboundEmailController>(InboundEmailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
