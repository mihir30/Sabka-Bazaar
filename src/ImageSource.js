import { Image } from "./components/atoms";
const ImageSource = ({ alt, source, className }) => {
  return (
    <Image source={require(`${source}`)} alt={alt} className={className} />
  );
};

export default ImageSource;
