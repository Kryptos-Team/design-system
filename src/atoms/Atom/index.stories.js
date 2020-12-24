import React from "react"
import { storiesOf } from "@storybook/react"
import Atom from "."

storiesOf("Atom", module)
  .add("default", () => <Atom>Hello World</Atom>)
  .add("reverse", () => <Atom reverse>Hello World</Atom>)
