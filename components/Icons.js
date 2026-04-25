const iconPaths = {
  wing: (
    <>
      <path d="M4 15c5-6 10-9 20-10-3 3-5 6-7 10H4Z" />
      <path d="M44 15c-5-6-10-9-20-10 3 3 5 6 7 10h13Z" />
      <circle cx="24" cy="10" r="4" />
      <path d="M20 16h8l-2 10h-4l-2-10Z" />
    </>
  ),
  eye: (
    <>
      <path d="M4 16c4-6 10-9 20-9s16 3 20 9c-4 6-10 9-20 9S8 22 4 16Z" />
      <circle cx="24" cy="16" r="5" />
      <path d="M24 22v8m-5-2 5-3 5 3" />
    </>
  ),
  ankh: (
    <>
      <path d="M24 4c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8Z" />
      <path d="M24 20v20m-8-12h16" />
    </>
  ),
  temple: (
    <>
      <path d="M6 16 24 7l18 9" />
      <path d="M10 16v16m8-16v16m8-16v16m8-16v16" />
      <path d="M6 32h36M8 36h32" />
    </>
  ),
  scroll: (
    <>
      <path d="M14 7h16a6 6 0 0 1 0 12H18a6 6 0 1 0 0 12h16" />
      <path d="M14 7a6 6 0 0 0 0 12m16 0a6 6 0 1 1 0 12" />
      <path d="M20 14h10m-10 8h10" />
    </>
  ),
  shield: (
    <>
      <path d="M24 5 38 10v10c0 8-5 14-14 19C15 34 10 28 10 20V10l14-5Z" />
      <path d="m20 20 3 3 6-7" />
    </>
  ),
  globe: (
    <>
      <circle cx="24" cy="24" r="16" />
      <path d="M8 24h32M24 8a26 26 0 0 1 0 32M24 8a26 26 0 0 0 0 32M12 14c3 2 7 3 12 3s9-1 12-3M12 34c3-2 7-3 12-3s9 1 12 3" />
    </>
  ),
  book: (
    <>
      <path d="M10 10a6 6 0 0 1 6-6h20v28H16a6 6 0 0 0-6 6V10Z" />
      <path d="M16 4v28a6 6 0 0 0-6 6m12-26h8m-8 8h8" />
    </>
  ),
  cap: (
    <>
      <path d="M4 18 24 8l20 10-20 10L4 18Z" />
      <path d="M12 22v6c0 2 6 6 12 6s12-4 12-6v-6" />
    </>
  ),
  library: (
    <>
      <path d="M10 8h10v28H10zM24 8h10v28H24zM8 36h28" />
      <path d="M14 12v20M28 12v20" />
    </>
  ),
  medal: (
    <>
      <path d="M18 4h12l-2 10h-8L18 4Z" />
      <circle cx="24" cy="26" r="10" />
      <path d="m20 26 3 3 5-6" />
    </>
  ),
  lecture: (
    <>
      <path d="M8 10h24v16H8z" />
      <path d="M12 30h16M20 26v4" />
      <path d="M36 14c4 2 6 5 6 10" />
      <circle cx="36" cy="10" r="2" />
    </>
  ),
  pyramid: (
    <>
      <path d="m6 34 10-20 10 20H6Zm16 0 10-24 10 24H22Z" />
      <path d="M16 14v20m16-24v24" />
    </>
  ),
  location: (
    <>
      <path d="M24 40s12-12 12-22a12 12 0 1 0-24 0c0 10 12 22 12 22Z" />
      <circle cx="24" cy="18" r="4" />
    </>
  ),
  phone: (
    <>
      <path d="M15 8h6l3 7-4 3c2 4 5 7 9 9l3-4 7 3v6c0 2-2 4-4 4C18 36 8 26 8 13c0-3 2-5 4-5h3Z" />
    </>
  ),
  email: (
    <>
      <path d="M6 12h36v24H6z" />
      <path d="m6 14 18 12 18-12" />
    </>
  ),
  clock: (
    <>
      <circle cx="24" cy="24" r="16" />
      <path d="M24 15v10l6 4" />
    </>
  ),
  facebook: (
    <>
      <path d="M27 10h5V4h-5c-6 0-9 4-9 10v4h-4v6h4v16h6V24h6l2-6h-8v-4c0-2 1-4 3-4Z" />
    </>
  ),
  menu: (
    <>
      <path d="M8 14h32M8 24h32M8 34h32" />
    </>
  ),
  close: (
    <>
      <path d="M12 12 36 36M36 12 12 36" />
    </>
  ),
  arrow: (
    <>
      <path d="M10 24h24" />
      <path d="m26 16 8 8-8 8" />
    </>
  )
};

export function Icon({ name, size = 24, className = '' }) {
  const paths = iconPaths[name] || iconPaths.book;
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths}
    </svg>
  );
}
