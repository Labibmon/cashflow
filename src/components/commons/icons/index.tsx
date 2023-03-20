import { CSSProperties } from "react";
import { IconAssetType, IconAssetTypeData, useIconsAssets } from "./icon-assets";

type IconPropertiesProps = {
    color?: string;
    height?: string;
    width?: string;
    className?: string;
    onClick?: () => void;
    cursor?: string;
    style?: CSSProperties;
    readyComponent?: boolean;
  };

interface IconsProps extends IconPropertiesProps {
    type: IconAssetType;
}

const useIconStyle = ({
    width,
    height,
    type,
    color = '#000000',
    style,
}: {
    width: string,
    height: string,
    type: IconAssetType,
    color?: string;
    cursor?: string;
    style?: CSSProperties;
}) => {
    const iconsAssets: IconAssetTypeData = useIconsAssets(color.substring(1))
    
    const styles = {
      backgroundImage: iconsAssets[type],
      display: 'inline-block',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      minWidth: width,
      maxWidth: width,
      width: width,
      height: height,
      maxHeight: height,
      minHeight: height,

      ...style
    }

    return styles
}

const Icons = ({
    type,
    color,
    className,
    onClick,
    height = '10px',
    width = '10px',
    style,
    readyComponent = true,
  }: IconsProps) => {
    const iconStyle = useIconStyle({
      width,
      height,
      type,
      color,
      style,
    })
    
  
    return readyComponent ? (
      <span
        aria-hidden="true"
        className={`${className}`}
        onClick={onClick}
        style={iconStyle}
      />
    ) : <></>;
  };
  
  export default Icons;