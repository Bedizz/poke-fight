import { Card, Inset, Text, Strong } from "@radix-ui/themes";

const CardText = ({ children, img, alt }) => {
  return (
    <Card size="2" style={{ minWidth:200 ,maxWidth: 250, height:260 }}>
      <Inset clip="padding-box" side="top" pb="current">
        <img
          src={img}
          alt={alt}
          style={{
            display: 'block',
            objectFit: 'contain',
            width: '100%',
            height: 140,
            backgroundColor: 'var(--gray-5)',
          }}
        />
      </Inset>
      <Text as="p" size="3" style={{backgroundColor:"white", color:"#000000"}}>
        { children }
      </Text>
    </Card>
  )
}

export default CardText