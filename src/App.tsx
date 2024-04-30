import { FC } from "react";
import "./App.css";
import Button from "./components/ui/button/Button";
import BookmarkIcon from "./components/ui/button/BookmarkIcon";
import ArrowIcon from "./components/ui/button/ArrowIcon";

const App: FC = (): JSX.Element => {
  return (
    <div className="App">
      <Button startIcon={<BookmarkIcon />} disabled>
        Button
      </Button>
      <Button disabled>Button</Button>
      <Button>Button</Button>
      <Button variant="secondary">Button</Button>
      <Button variant="secondary" disabled>
        Button
      </Button>
      <Button variant="secondary" startIcon={<BookmarkIcon />}>
        Button
      </Button>
      <Button variant="secondary" startIcon={<BookmarkIcon />} disabled>
        Button
      </Button>

      <Button endIcon={<ArrowIcon />}>Button</Button>
    </div>
  );
};

export default App;
