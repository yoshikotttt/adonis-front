import { FC } from "react";

type Props = {
    color: string;
    fontSize: string;
}

const Text: FC<Props> = (props) => {
    const {color, fontSize} = props;
  return (
   
        <p style={{ color, fontSize }}>テキストです</p>
  )
}

export default Text