export type IconProps = {
  className?: string;
};

export const IconLinkedIn = ({ className }: IconProps) => {
  return <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <g fill="currentColor">
      <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.74 3.74 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766c-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483a1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.6 1.6 0 0 1 1.6 1.606" clip-rule="evenodd"/>
      <path d="M7.2 8.809H4V19.5h3.2z"/>
    </g>
  </svg>;
};

export const IconMoon = ({ className }: IconProps) => {
  return <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9 9 0 0 1 12 21"/>
  </svg>;
};

export const IconProyects = ({ className }: IconProps) => {
  return <svg className={className} width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.2421 19.5531C15.3844 19.5531 19.5531 15.3844 19.5531 10.2421C19.5531 5.09981 15.3844 0.931152 10.2421 0.931152C5.09981 0.931152 0.931152 5.09981 0.931152 10.2421C0.931152 15.3844 5.09981 19.5531 10.2421 19.5531Z" stroke="white" strokeWidth="1.86219" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M0.931152 10.2423H19.5531" stroke="white" strokeWidth="1.86219" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.2422 0.931396C12.5711 3.48106 13.8947 6.78988 13.9666 10.2424C13.8947 13.6948 12.5711 17.0036 10.2422 19.5533C7.91327 17.0036 6.58975 13.6948 6.51782 10.2424C6.58975 6.78988 7.91327 3.48106 10.2422 0.931396Z" stroke="white" strokeWidth="1.86219" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>;
};
