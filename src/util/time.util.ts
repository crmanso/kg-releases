import { DateTime } from 'luxon'

export const LUXON_ISO_DATE_FORMAT = 'yyyy-MM-dd'
export const FORMAT_DATETIME_PRETTY = 'yyyy-MM-dd HH:mm:ss'
export const FORMAT_TIME_PRETTY = 'HH:mm:ss'
export const FORMAT_HM = 'HH:mm'

class TimeUtil {
  timeBetween (ms1: number, ms2: number): string {
    let d = Math.abs(Math.round((ms1 - ms2) / 1000))
    if (d === 1) return `${d} second`
    if (d < 50) return `${d} seconds`
    d = Math.round(d / 60)
    if (d === 1) return `${d} minute`
    if (d < 50) return `${d} minutes`
    d = Math.round(d / 60)
    if (d === 1) return `${d} hour`
    if (d < 24) return `${d} hours`
    d = Math.round(d / 24)
    if (d === 1) return `${d} day`
    return `${d} days`
  }

  now (): DateTime {
    return DateTime.local()
  }

  nowPretty (): string {
    return DateTime.local().toFormat(FORMAT_DATETIME_PRETTY)
  }

  unixtimePretty (ts: number): string {
    return DateTime.fromMillis(ts * 1000).toFormat(FORMAT_DATETIME_PRETTY)
  }

  timePretty (ts: number): string {
    return DateTime.fromMillis(ts * 1000).toFormat(FORMAT_TIME_PRETTY)
  }

  timeHM (ts: number): string {
    return DateTime.fromMillis(ts * 1000).toFormat(FORMAT_HM)
  }

  unixtimeToDay (ts: number): string {
    return DateTime.fromMillis(ts * 1000).toFormat(LUXON_ISO_DATE_FORMAT)
  }
}

export const timeUtil = new TimeUtil()
