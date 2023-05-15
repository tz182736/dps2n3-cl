// If you have implicit return:
// const Component: React.FC = () => { }
// If you have explicit return
// const Component = (): JSX.Element => { }

import React from "react";

type ItemProps = {
  id: number
  name: string
}

const Item: React.FC<ItemProps> = ({ id, name }) =>
(
  <section>
    my id is {id}
    my name is {name}
  </section>
)

const item = ({ id, name }: ItemProps) =>
(
  <section>
    my id is {id}
    my name is {name}
  </section>
)

export default () =>
(
  <section>
    {item({ id: 1, name: "item-1" })}
    <Item id={1} name={"item-1"} />
  </section>
)
