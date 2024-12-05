

import { IconProps } from "../utils/types";

const Leaderboard: React.FC<IconProps> = ({ size = 24, className = "" }) => {

    const svgSize = `${size}px`;

    return (
        <svg className={className} height={svgSize} width={svgSize} viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.53906 7.5625C9.53906 6.95312 9.71484 6.47656 10.0664 6.13281C10.4258 5.78906 10.918 5.61719 11.543 5.61719H13.8164C13.9102 5.01563 14.1641 4.54688 14.5781 4.21094C15 3.86719 15.5625 3.69531 16.2656 3.69531H25.7344C26.4453 3.69531 27.0078 3.86719 27.4219 4.21094C27.8359 4.54688 28.0898 5.01563 28.1836 5.61719H30.457C31.082 5.61719 31.5703 5.78906 31.9219 6.13281C32.2812 6.47656 32.4609 6.95312 32.4609 7.5625C32.4609 9.17188 32.2031 10.5859 31.6875 11.8047C31.1719 13.0156 30.3984 14.0391 29.3672 14.875C28.3359 15.7109 27.0469 16.3672 25.5 16.8438C25.1406 17.2891 24.7617 17.6914 24.3633 18.0508C23.9648 18.4023 23.5664 18.7031 23.168 18.9531V24.0508H24.9961C25.8242 24.0508 26.4492 24.2734 26.8711 24.7188C27.3008 25.1641 27.5156 25.7773 27.5156 26.5586V28.4922C27.5156 28.7578 27.4258 28.9727 27.2461 29.1367C27.0664 29.3008 26.8555 29.3828 26.6133 29.3828H15.3867C15.1445 29.3828 14.9336 29.3008 14.7539 29.1367C14.5742 28.9727 14.4844 28.7578 14.4844 28.4922V26.5586C14.4844 25.7773 14.6953 25.1641 15.1172 24.7188C15.5469 24.2734 16.1719 24.0508 16.9922 24.0508H18.832V18.9531C18.4336 18.7031 18.0352 18.4023 17.6367 18.0508C17.2383 17.6914 16.8555 17.2891 16.4883 16.8438C14.9414 16.3672 13.6523 15.7109 12.6211 14.875C11.5977 14.0391 10.8281 13.0156 10.3125 11.8047C9.79688 10.5859 9.53906 9.17188 9.53906 7.5625ZM11.2148 7.72656C11.2148 9.39844 11.5312 10.8047 12.1641 11.9453C12.7969 13.0859 13.7266 13.9648 14.9531 14.582C14.5938 13.8633 14.3047 13.0938 14.0859 12.2734C13.8672 11.4453 13.7578 10.582 13.7578 9.68359V7.38672H11.5547C11.4531 7.38672 11.3711 7.42188 11.3086 7.49219C11.2461 7.55469 11.2148 7.63281 11.2148 7.72656ZM27.0352 14.582C28.2695 13.9648 29.2031 13.0859 29.8359 11.9453C30.4688 10.8047 30.7852 9.39844 30.7852 7.72656C30.7852 7.63281 30.7539 7.55469 30.6914 7.49219C30.6289 7.42188 30.5469 7.38672 30.4453 7.38672H28.2422V9.68359C28.2422 10.582 28.1328 11.4453 27.9141 12.2734C27.6953 13.0938 27.4023 13.8633 27.0352 14.582Z" fill="currentColor"></path></svg>
    );
};

export default Leaderboard;