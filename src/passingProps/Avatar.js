// import { getImageUrl } from './util.js';

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={imageId(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default Avatar;