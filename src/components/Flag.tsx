import type { FlagCode } from '../data/site';

const tri = (a: string, b: string, c: string, vertical = true) =>
  vertical ? (
    <>
      <rect width="10" height="20" fill={a} />
      <rect x="10" width="10" height="20" fill={b} />
      <rect x="20" width="10" height="20" fill={c} />
    </>
  ) : (
    <>
      <rect width="30" height="6.67" fill={a} />
      <rect y="6.67" width="30" height="6.67" fill={b} />
      <rect y="13.33" width="30" height="6.67" fill={c} />
    </>
  );

const FLAGS: Record<FlagCode, React.ReactNode> = {
  gb: (
    <>
      <rect width="30" height="20" fill="#012169" />
      <path d="M0 0L30 20M30 0L0 20" stroke="#fff" strokeWidth="4" />
      <path d="M0 0L30 20M30 0L0 20" stroke="#C8102E" strokeWidth="1.6" />
      <path d="M15 0V20M0 10H30" stroke="#fff" strokeWidth="6" />
      <path d="M15 0V20M0 10H30" stroke="#C8102E" strokeWidth="3.4" />
    </>
  ),
  es: (
    <>
      <rect width="30" height="20" fill="#AA151B" />
      <rect y="5" width="30" height="10" fill="#F1BF00" />
    </>
  ),
  fr: tri('#002395', '#fff', '#ED2939'),
  it: tri('#009246', '#fff', '#CE2B37'),
  de: tri('#000', '#DD0000', '#FFCE00', false),
  pt: (
    <>
      <rect width="30" height="20" fill="#FF0000" />
      <rect width="12" height="20" fill="#006600" />
      <circle cx="12" cy="10" r="4.2" fill="#FFCC00" />
      <circle cx="12" cy="10" r="2.6" fill="#fff" stroke="#FF0000" strokeWidth="1" />
    </>
  ),
};

export default function Flag({ code, size = 28 }: { code: FlagCode; size?: number }) {
  return (
    <span className="flag" style={{ width: size, height: size }}>
      <svg viewBox="0 0 30 20" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        {FLAGS[code]}
      </svg>
    </span>
  );
}
