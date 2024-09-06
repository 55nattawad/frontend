import Image from "next/image";
import slider1 from "../../public/slider4.jpg";

export default function Carousel() {
  return (
    <div className="carousel-inner">
      <div className="carousel-item active">
        <Image src={slider1} alt="Slider 1" layout="responsive" width={1920} height={1080} />
      </div>
    </div>
  );
}
