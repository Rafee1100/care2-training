import Image from "next/image";

export default function ImageComp({
  imageUrl,
  height = 500,
  width = 500,
  classes,
}: any) {
  return (
    <Image
      className={`${classes}`}
      src={imageUrl}
      alt="imageUrl"
      width={width}
      height={height}
      priority
    />
  );
}
