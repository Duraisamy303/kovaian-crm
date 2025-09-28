declare module '@iconscout/react-unicons' {
    import { FC, SVGProps } from 'react';
    
    export interface IconProps extends SVGProps<SVGSVGElement> {
      size?: string | number;
      color?: string;
    }
    
    export const UilDashboard: FC<IconProps>;
    export const UilUsersAlt: FC<IconProps>;
    export const UilUser: FC<IconProps>;
    export const UilBriefcase: FC<IconProps>;
    export const UilCalendarAlt: FC<IconProps>;
    export const UilFile: FC<IconProps>;
    export const UilClipboardNotes: FC<IconProps>;
    export const UilPhone: FC<IconProps>;
    export const UilListUl: FC<IconProps>;
    export const UilSearch: FC<IconProps>;
    export const UilBell: FC<IconProps>;
    export const UilSetting: FC<IconProps>;
    export const UilUserCircle: FC<IconProps>;
    export const UilAngleDown: FC<IconProps>;
    export const UilTimesCircle: FC<IconProps>;
    export const UilCheckCircle: FC<IconProps>;
    export const UilArrowUp: FC<IconProps>;
    export const UilArrowDown: FC<IconProps>;
    // export const UilActivity:FC<IconProps>;
    // Add other icons you need
  }