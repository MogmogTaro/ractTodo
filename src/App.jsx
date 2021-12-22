import { CssModules } from "./components/CssModules";
import { InlineStyle } from "./components/InlineStyle";
import { StyledComponents } from "./components/StyledComponents";
import { StyledJsx } from "./components/StyledJsx";

export const App = () => {
  return (
    <div>
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
    </div>
  );
};
