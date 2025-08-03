//the intrinsicElements thing lets you use the className attribute that are in regular components
export type workshop = React.JSX.IntrinsicElements['div'] & {
  className: string;
  title: string;
  time: string;
  tags: string[];
  desc: string;
}