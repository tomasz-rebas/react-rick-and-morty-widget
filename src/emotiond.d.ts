import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      status: {
        alive: string;
        dead: string;
        unknown: string;
      };
      border: string;
      label: string;
      shadow: string;
      hover: string;
      background: string;
    };
  }
}
