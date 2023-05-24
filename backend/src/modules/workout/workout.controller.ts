import { Controller, Get } from '@nestjs/common';

@Controller('workout')
export class WorkoutController {
  @Get()
  public get() {
    return null;
  }
}
