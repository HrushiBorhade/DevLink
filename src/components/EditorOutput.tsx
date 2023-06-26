import dynamic from "next/dynamic";
import { FC } from "react";
import CustomImageRenderer from "./CustomImageRenderer";
import CustomCodeRenderer from "./CustomCodeRenderer";
const Output = dynamic(
  async () => (await import("editorjs-react-renderer")).default
);
interface EditorOutputProps {
  content: any;
}
const style = {
  paragraph: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  },
};
const renderers = {
  image: CustomImageRenderer,
  code: CustomCodeRenderer,
};
const EditorOutput: FC<EditorOutputProps> = ({ content }) => {
  return (
    // @ts-expect-error
    <Output
      style={style}
      className="text-sm"
      renderers={renderers}
      data={content}
    ></Output>
  );
};

export default EditorOutput;
