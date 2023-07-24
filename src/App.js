import { getImageUrl } from "./image";
import "./styles.css";
const ratio = window.devicePixelRatio;
function Avatar(person, size) {
  let thumbNailSize = "s";
  if (size * ratio > 90) {
    thumbNailSize = "b";
  }
  return (
    <img
      className="avatar"
      src={getImageUrl(person, thumbNailSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
export default function Profile() {
  return (
    <>
      <Avatar
        person={{
          name: "Gregorio Y. Zara",
          imageId: "7vQD0fP"
        }}
        size={40}
      />
      <Avatar
        size={70}
        person={{
          name: "Gregorio Y. Zara",
          imageId: "7vQD0fP"
        }}
      />
      <Avatar
        size={120}
        person={{
          name: "Gregorio Y. Zara",
          imageId: "7vQD0fP"
        }}
      />
    </>
  );
}
