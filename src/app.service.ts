import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getInfo(): string {
    return 'API v1.0.0 for case managers, cases, and case notes.';
  }
}
