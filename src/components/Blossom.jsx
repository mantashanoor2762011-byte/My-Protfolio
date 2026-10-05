// Decorative cherry-blossom sprig (pure decoration, hidden from screen readers).
const flower = (cx, cy, r, key, tone = 0) => {
  const petal = ['#f6b3c6', '#f9cbd8', '#f3a0b7'][tone % 3]
  return (
    <g key={key} transform={`translate(${cx} ${cy})`}>
      {[0, 72, 144, 216, 288].map((a) => (
        <ellipse key={a} cx="0" cy={-r * 0.62} rx={r * 0.48} ry={r * 0.66} fill={petal} transform={`rotate(${a})`} opacity="0.95" />
      ))}
      <circle r={r * 0.28} fill="#e47c98" />
      <circle r={r * 0.12} fill="#fbe3a1" />
    </g>
  )
}
const leaf = (x, y, rot, key) => (
  <ellipse key={key} cx={x} cy={y} rx="9" ry="3.6" fill="#a9c2a3" transform={`rotate(${rot} ${x} ${y})`} />
)
const bud = (x, y, key) => <circle key={key} cx={x} cy={y} r="3.6" fill="#ee9ab2" />

export default function Blossom({ className = '', flip = false, sway = true, style }) {
  return (
    <svg
      viewBox="0 0 160 220"
      aria-hidden="true"
      focusable="false"
      className={`pointer-events-none select-none ${sway ? 'anim-sway' : ''} ${className}`}
      style={{ transformOrigin: flip ? '100% 100%' : '0% 100%', ...style }}
    >
      <g transform={flip ? 'translate(160 0) scale(-1 1)' : undefined}>
      <path d="M8 216 C 40 170, 52 120, 92 70 S 140 18, 152 8" stroke="#9a7766" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <path d="M60 128 C 78 120, 96 122, 116 108" stroke="#9a7766" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path d="M40 166 C 30 146, 30 130, 22 116" stroke="#9a7766" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      {[leaf(70, 112, -30, 'l1'), leaf(102, 66, -50, 'l2'), leaf(34, 150, 60, 'l3'), leaf(126, 104, -15, 'l4')]}
      {[bud(150, 10, 'b1'), bud(22, 114, 'b2'), bud(118, 106, 'b3')]}
      {[flower(92, 70, 15, 'f1', 0), flower(132, 30, 11, 'f2', 1), flower(58, 128, 12, 'f3', 2), flower(28, 132, 9, 'f4', 1), flower(104, 114, 10, 'f5', 0)]}
      </g>
    </svg>
  )
}
