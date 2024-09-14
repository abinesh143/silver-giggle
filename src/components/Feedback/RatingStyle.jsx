import Image from "next/image";

const RatingStyle = (props) => {
  const zoomStyles =
    `cursor-pointer auto-zoom hover:scale-150 hover:transition-transform duration-200`;

  const setRating = (value) => {
    if (props.isEvent) {
      props.setRating(value);
    }
  };
  return (
    <>
      {props.style === "emoji" ? (
        <>
          <Image
            src={"/svg/emoji-cry.svg"}
            width={props.pixel}
            height={props.pixel}
            alt="emoji-cry"
            className={`${props.type === "zoom" ? zoomStyles : ""} ${props.score && props.score !== 1 && 'opacity-50'}`}
            onClick={() => setRating(1)}
          />
          <Image
            src={"/svg/emoji-sad.svg"}
            width={props.pixel}
            height={props.pixel}
            alt="emoji-sad"
            className={`${props.type === "zoom" ? zoomStyles : ""} ${props.score && props.score !== 2 && 'opacity-50'}`}
            onClick={() => setRating(2)}
          />
          <Image
            src={"/svg/emoji-silent.svg"}
            width={props.pixel}
            height={props.pixel}
            alt="emoji-silent"
            className={`${props.type === "zoom" ? zoomStyles : ""} ${props.score && props.score !== 3 && 'opacity-50'}`}
            onClick={() => setRating(3)}
          />
          <Image
            src={"/svg/emoji-laugh.svg"}
            width={props.pixel}
            height={props.pixel}
            alt="emoji-laugh"
            className={`${props.type === "zoom" ? zoomStyles : ""} ${props.score && props.score !== 4 && 'opacity-50'}`}
            onClick={() => setRating(4)}
          />
          <Image
            src={"/svg/emoji-heart.svg"}
            width={props.pixel}
            height={props.pixel}
            alt="emoji-heart"
            className={`${props.type === "zoom" ? zoomStyles : ""} ${props.score && props.score !== 5 && 'opacity-50'}`}
            onClick={() => setRating(5)}
          />
        </>
      ) : (
        <>
          <Image
            src={"/svg/digit_1.svg"}
            width={props.pixel}
            height={props.pixel}
            alt="emoji-cry"
            className={`${props.type === "zoom" ? zoomStyles : ""} ${props.score && props.score !== 1 && 'opacity-50'}`}
            onClick={() => setRating(1)}
          />
          <Image
            src={"/svg/digit_2.svg"}
            width={props.pixel}
            height={props.pixel}
            alt="emoji-sad"
            className={`${props.type === "zoom" ? zoomStyles : ""} ${props.score && props.score !== 2 && 'opacity-50'}`}
            onClick={() => setRating(2)}
          />
          <Image
            src={"/svg/digit_3.svg"}
            width={props.pixel}
            height={props.pixel}
            alt="emoji-silent"
            className={`${props.type === "zoom" ? zoomStyles : ""} ${props.score && props.score !== 3 && 'opacity-50'}`}
            onClick={() => setRating(3)}
          />
          <Image
            src={"/svg/digit_4.svg"}
            width={props.pixel}
            height={props.pixel}
            alt="emoji-laugh"
            className={`${props.type === "zoom" ? zoomStyles : ""} ${props.score && props.score !== 4 && 'opacity-50'}`}
            onClick={() => setRating(4)}
          />
          <Image
            src={"/svg/digit_5.svg"}
            width={props.pixel}
            height={props.pixel}
            alt="emoji-heart"
            className={`${props.type === "zoom" ? zoomStyles : ""} ${props.score && props.score !== 5 && 'opacity-50'}`}
            onClick={() => setRating(5)}
          />
        </>
      )}
    </>
  );
};

export default RatingStyle;
