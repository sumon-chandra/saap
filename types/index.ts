import { Post, User } from "@prisma/client";
import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type FullPostTypes = Post & {
  user: User
}
