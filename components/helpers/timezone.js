export default function getUserTimezone() {
  const tz = jstz.determine();
  return tz.name();
}
