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

export const Container = () =>
    (
        <section>
            {item({ id: 1, name: "item-1" })}
            <Item id={1} name={"item-1"} />
        </section>
    )