import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ApiResponse<T> {
  status: boolean;
  message: string;
  data: T;
  timestamp: string;
  path: string;
}

@Injectable()
export class ResponseInterceptor<T>
  implements NestInterceptor<T, ApiResponse<T>>
{
  intercept(context: ExecutionContext, next: CallHandler): Observable<ApiResponse<T>> {
    const request = context.switchToHttp().getRequest();
    const timeZoneHeader =
      (typeof request?.get === 'function' ? request.get('x-timezone') : undefined) ??
      request?.headers?.['x-timezone'];
    const timeZone = this.normalizeTimeZone(timeZoneHeader) ?? 'UTC';
    return (next.handle() as Observable<any>).pipe(
      map((data) => ({
        status: data.status === 'success' ? true : false,
        timestamp: this.formatDateInTimeZone(new Date(), timeZone),
        path: request?.originalUrl ?? request?.url ?? '',
        message: data.message || '',
        data: this.convertDates(data.data ?? null, timeZone) as unknown as T,
      })),
    );
  }

  private normalizeTimeZone(value: unknown): string | null {
    if (typeof value !== 'string') return null;
    const trimmed = value.trim();
    if (!trimmed) return null;
    if (!this.isValidTimeZone(trimmed)) return null;
    return trimmed;
  }

  private isValidTimeZone(timeZone: string): boolean {
    try {
      Intl.DateTimeFormat('en-US', { timeZone }).format(new Date());
      return true;
    } catch {
      return false;
    }
  }

  private formatDateInTimeZone(date: Date, timeZone: string): string {
    const parts = new Intl.DateTimeFormat('en-CA', {
      timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hourCycle: 'h23',
      timeZoneName: 'short',
    }).formatToParts(date);

    const get = (type: string) => parts.find((p) => p.type === type)?.value ?? '';
    const y = get('year');
    const m = get('month');
    const d = get('day');
    const hh = get('hour');
    const mm = get('minute');
    const ss = get('second');
    const tz = get('timeZoneName');
    const offset = this.parseTzOffset(tz);

    return `${y}-${m}-${d}T${hh}:${mm}:${ss}${offset}`;
  }

  private parseTzOffset(tzName: string): string {
    const match = /GMT([+-]\d{1,2})(?::?(\d{2}))?/.exec(tzName);
    if (!match) return '';
    const hours = match[1].padStart(3, match[1].startsWith('-') ? '-' : '+');
    const minutes = (match[2] ?? '00').padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  private convertDates(value: unknown, timeZone: string): unknown {
    if (value === null || value === undefined) return value;
    if (value instanceof Date) {
      return this.formatDateInTimeZone(value, timeZone);
    }
    if (Array.isArray(value)) {
      return value.map((item) => this.convertDates(item, timeZone));
    }
    if (typeof value === 'object') {
      const out: Record<string, unknown> = {};
      for (const [key, val] of Object.entries(value as Record<string, unknown>)) {
        out[key] = this.convertDates(val, timeZone);
      }
      return out;
    }
    if (typeof value === 'string' && this.isIsoDateString(value)) {
      const date = new Date(value);
      if (!Number.isNaN(date.getTime())) {
        return this.formatDateInTimeZone(date, timeZone);
      }
    }
    return value;
  }

  private isIsoDateString(value: string): boolean {
    return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/.test(value);
  }
}
