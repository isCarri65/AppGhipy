import { FC } from "react";
import { Button, Card } from "react-bootstrap";

interface IGift {
  urlGift: string;
  title: string;
}

interface IpropsCardGift {
  gift: IGift;
}

export const CardGift: FC<IpropsCardGift> = ({gift}) => {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={gift.urlGift} />
      <Card.Body>
        <Card.Title>{gift.title}</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}
