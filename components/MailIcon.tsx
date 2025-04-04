interface MailIconProps {
  fill?: string;
  width?: string;
  height?: string;
}

const MailIcon: React.FC<MailIconProps> = ({ fill, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={width}
      height={height}
      fill={fill}
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M28.8 3.2h-25.6c-1.76 0-3.184 1.44-3.184 3.2l-0.016 19.2c0 1.76 1.44 3.2 3.2 3.2h25.6c1.76 0 3.2-1.44 3.2-3.2v-19.2c0-1.76-1.44-3.2-3.2-3.2zM28.16 10l-11.312 7.072c-0.512 0.32-1.184 0.32-1.696 0l-11.312-7.072c-0.417-0.238-0.694-0.679-0.694-1.186 0-0.751 0.609-1.36 1.36-1.36 0.29 0 0.558 0.091 0.779 0.245l-0.004-0.003 10.72 6.704 10.72-6.704c0.216-0.151 0.485-0.242 0.774-0.242 0.751 0 1.36 0.609 1.36 1.36 0 0.506-0.277 0.948-0.688 1.182l-0.007 0.004z"></path>
    </svg>
  );
};

export default MailIcon;
