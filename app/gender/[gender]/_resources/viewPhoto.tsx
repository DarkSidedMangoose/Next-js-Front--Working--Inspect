import Image, { StaticImageData } from "next/image";
import { useCallback } from "react";
import Exit from "../../../../public/closes.png";

interface ViewPhotoProps {
  img: StaticImageData;
  alt: string;
  closeClick: (arg: boolean) => void;
}

const ViewPhoto: React.FC<ViewPhotoProps> = ({ img, alt, closeClick }) => {
  const handleClose = useCallback(() => {
    closeClick(false);
  }, [closeClick]);

  const handleImageClicker = (event: React.MouseEvent<HTMLImageElement>) => {
    event.stopPropagation(); // Prevents the event from bubbling up to the parent div
    closeClick(true);
  };

  return (
    <div
      className="fixed w-full  h-full bg-[#76767676] top-0 left-0 flex justify-center items-center"
      onClick={handleClose}
    >
      <div className="null:w-[300px] null:h-[450px] md:w-[500px] md:h-[700px] relative">
        <Image
          src={img}
          alt={alt}
          className="w-full h-full"
          onClick={handleImageClicker}
        />
        <div
          className="absolute -top-4 -right-4 w-[40px] h-[40px] bg-[#ffffffb3] flex justify-center items-center rounded-full cursor-pointer"
          onClick={handleClose}
        >
          <Image
            src={Exit}
            alt="exit"
            className="absolute w-[20px] h-[20px] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default ViewPhoto;
