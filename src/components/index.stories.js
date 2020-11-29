import React from "react";
import { storiesOf } from "@storybook/react";

import { App } from "./index";

const stories = storiesOf("testApp", module);

stories.add("default", () => <App />);
