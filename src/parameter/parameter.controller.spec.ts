import { Test, TestingModule } from '@nestjs/testing';
import { ParamController } from './parameter.controller';

describe('Mood Controller', () => {
  let controller: ParamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParamController],
    }).compile();

    controller = module.get<ParamController>(ParamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
