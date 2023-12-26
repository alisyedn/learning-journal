import {ClassAttributes, HTMLAttributes} from "react";
import {ExtraProps} from "react-markdown";

export type MarkdownElementArg =  ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & ExtraProps
